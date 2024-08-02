import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    // provideHttpClient(withInterceptorsFromDi()),
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [DataService],
})
export class AppComponent {
  title = 'sweeps-three';
}
