import { ApplicationConfig, provideZoneChangeDetection, } from '@angular/core';
import { provideRouter, withRouterConfig} from '@angular/router';

import { routes } from './app.routes';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: "reload",
        useClass: PathLocationStrategy
      }),
    ),
  ],
};


