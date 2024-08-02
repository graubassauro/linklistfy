interface Advert {
  adsId: number;
  adsUid: string;
  urlImage: string;
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  isVideo: boolean;
  isCircular: boolean;
  isDeal: boolean;
}

export interface MerchantData {
  merchantId: number;
  merchantUId: string;
  merchantUserLotteryUId: string;
  name: string;
  weeklySales: string;
  about: string | null;
  countryCode: number;
  phoneNumber: string;
  address: string;
  urlImage: string;
  email: string;
  urlFacebook: string;
  urlInstagram: string;
  urlTwitter: string;
  urlLinkedin: string;
  urlSite: string;
  userName: string;
  placeId: string | null;
  urlTikTok: string | null;
  whatsAppChannel: string | null;
  googleLinkReview: string | null;
  userId: number;
  distributorId: number;
  latitude: number;
  longitude: number;
  urlPocketPage: string | null;
  adverts: Advert[];
}

export interface Social {
  urlFacebook: string | null;
  urlTwitter: string | null;
  urlTiktok: string | null;
  urlInstagram: string | null;
  urlLinkedin: string | null;
  urlSite: string | null;
  whatsAppChannel: string | null;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: MerchantData;
}

export interface SocialIcons {
  urlFacebook: {
    url: null | string;
    iconUrl: string;
  };
  urlTwitter: {
    url: null | string;
    iconUrl: string;
  };
  urlTiktok: {
    url: null | string;
    iconUrl: string;
  };
  urlInstagram: {
    url: null | string;
    iconUrl: string;
  };
  urlLinkedin: {
    url: null | string;
    iconUrl: string;
  };
  urlSite: {
    url: null | string;
    iconUrl: string;
  };
  whatsAppChannel: {
    url: null | string;
    iconUrl: string;
  };
}
