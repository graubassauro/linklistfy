import { Component, Input, OnInit } from '@angular/core';
import { OfferComponent } from '../offer/offer.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'content',
  standalone: true,
  imports: [OfferComponent, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent implements OnInit {
  @Input() pdfUrl = '';
  trustedUrl: SafeUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.pdfUrl
    );
  }
}
