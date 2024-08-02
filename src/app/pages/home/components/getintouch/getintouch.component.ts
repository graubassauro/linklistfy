import { Component, Input } from '@angular/core';

@Component({
  selector: 'getintouch',
  standalone: true,
  imports: [],
  templateUrl: './getintouch.component.html',
  styleUrl: './getintouch.component.scss',
})
export class GetintouchComponent {
  @Input() name = '';
  @Input() email = '';
  @Input() phoneNumber = '';
  @Input() imgUrl = '';
}
