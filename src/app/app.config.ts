import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

import {provideTranslateService, provideTranslateLoader} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import {provideHttpClient, withFetch} from "@angular/common/http";



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    SsrCookieService,
    provideHttpClient(withFetch()),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json'
      }),
    })
  ]
};
