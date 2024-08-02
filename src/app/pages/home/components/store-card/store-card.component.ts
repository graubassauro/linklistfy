import { Component, Input, OnInit } from '@angular/core';
import { Social, SocialIcons } from '../../../../types/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'store-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store-card.component.html',
  styleUrl: './store-card.component.scss',
})
export class StoreCardComponent implements OnInit {
  constructor() {}
  @Input() name: string = '';
  @Input() address: string = '';
  @Input() imgUrl: string = '';

  @Input() social: Social = {
    urlFacebook: null,
    urlTwitter: null,
    urlTiktok: null,
    urlInstagram: null,
    urlLinkedin: null,
    urlSite: null,
    whatsAppChannel: null,
  };

  socialUrls: SocialIcons = {
    urlFacebook: {
      url: null,
      iconUrl:
        'https://touchmile.blob.core.windows.net/clickwins/icons/facebook.svg',
    },
    urlTwitter: {
      url: null,
      iconUrl:
        'https://touchmile.blob.core.windows.net/clickwins/icons/XLogo.svg',
    },
    urlTiktok: {
      url: null,
      iconUrl:
        'https://touchmile.blob.core.windows.net/clickwins/icons/TiktokLogo.svg',
    },
    urlInstagram: {
      url: null,
      iconUrl:
        'https://touchmile.blob.core.windows.net/clickwins/icons/instagram.svg',
    },
    urlLinkedin: {
      url: null,
      iconUrl:
        'https://touchmile.blob.core.windows.net/clickwins/icons/linkedin.svg',
    },
    urlSite: {
      url: null,
      iconUrl:
        'https://touchmile.blob.core.windows.net/clickwins/icons/globe.svg',
    },
    whatsAppChannel: {
      url: null,
      iconUrl:
        'https://touchmile.blob.core.windows.net/clickwins/icons/WhatsappLogo.svg',
    },
  };

  socialIcons: { url: string; img: string }[] = [];

  ngOnInit(): void {
    const keys = Object.keys(this.social);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i] as keyof Social;

      this.socialUrls[key].url = this.social[key];
    }

    const urlsKeys = Object.keys(this.socialUrls);

    let array = [];

    for (let i = 0; i < urlsKeys.length; i++) {
      const key = urlsKeys[i] as keyof typeof this.socialUrls;

      if (this.socialUrls[key].url) {
        array.push({
          url: this.socialUrls[key].url,
          img: this.socialUrls[key].iconUrl,
        });
      }
    }
    this.socialIcons = array;
  }
}
