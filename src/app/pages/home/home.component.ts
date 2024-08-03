import { Component, OnInit } from '@angular/core';
import { MapComponent } from './components/map/map.component';
import { StoreCardComponent } from './components/store-card/store-card.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { GetintouchComponent } from './components/getintouch/getintouch.component';
import { ContentComponent } from './components/content/content.component';
import { DataService } from '../../services/data.service';
import { ApiResponse, MerchantData, Social } from '../../types/data';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    StoreCardComponent,
    MapComponent,
    ReviewsComponent,
    ContentComponent,
    GetintouchComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  data!: MerchantData ;
  id: string | null = null;
  socialUrls!: Social;
  errorMessage: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    if (this.id) {
      this.dataService.getData(this.id).subscribe({
        next: (res) => {
          if (res.success) {
            this.data = res.data;
            // console.log(this.data);
            this.socialUrls = {
              urlFacebook: this.data.urlFacebook,
              urlTwitter: this.data.urlTwitter,
              urlTiktok: this.data.urlTikTok,
              urlInstagram: this.data.urlInstagram,
              urlLinkedin: this.data.urlLinkedin,
              urlSite: this.data.urlSite,
              whatsAppChannel: this.data.whatsAppChannel,
            };
          }
          // console.log(this.socialUrls);
        },
        error: (err) => {
          this.errorMessage = err;
        },
      });
    }
  }
}
