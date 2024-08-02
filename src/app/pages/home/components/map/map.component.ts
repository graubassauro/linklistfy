import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  standalone: true,
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  private map!: L.Map;

  iconURL =
    'https://touchmile.blob.core.windows.net/clickwins/icons/marker-icon-2x.png';

  @Input() longitude: number = 0;
  @Input() latitude: number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log(this.longitude, this.latitude);
    this.initMap(this.longitude, this.latitude);
  }

  private initMap(lon: number, lat: number): void {
    console.log(lon, lat);
    this.map = L.map('map', {
      center: [lat, lon],
      zoom: 12,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    const icon = L.icon({
      iconUrl: this.iconURL,
      iconSize: [20, 32],
      iconAnchor: [10, 32],
    });

    const marker = L.marker([lat, lon], {
      icon: icon,
    });
    marker.addTo(this.map);
  }
}
