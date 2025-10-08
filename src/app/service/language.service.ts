import { inject, Injectable, InjectionToken, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

export const SERVER_LANG_TOKEN = new InjectionToken<string>(
  'SERVER_LANG_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class LanguageService {


  cookie = inject(SsrCookieService);
  translate = inject(TranslateService);

  langServer = inject(SERVER_LANG_TOKEN, {
    optional: true,
  });

  currentLang = signal(this.langServer ?? 'en');

  changeLang(lang: string) {
    //if (this.currentLang() === lang) return; // evita re-render innecesario
    this.cookie.set('lang', lang);
    console.log({ lang });

    this.translate.setFallbackLang(lang);
    this.translate.use(lang);

    this.currentLang.set(lang);
  }

}
