import { inject, Injectable, InjectionToken, signal } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

export const SERVER_LANG_TOKEN = new InjectionToken<string>(
  'SERVER_LANG_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  cookie = inject(SsrCookieService);

  changeLang(lang: string) {
    this.cookie.set('lang', lang);
    console.log({ lang });
  }
}
