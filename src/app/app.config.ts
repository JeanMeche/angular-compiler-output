import {
  APP_INITIALIZER,
  ApplicationConfig,
  ENVIRONMENT_INITIALIZER,
  inject,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { initHightlighter } from './compile';
import { MatIconRegistry } from '@angular/material/icon';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideAnimationsAsync(),
    provideRouter([]),
    {
      provide: APP_INITIALIZER,
      useValue: async () => await initHightlighter(),
      multi: true,
    },
    {
      provide: ENVIRONMENT_INITIALIZER,
      useFactory: () => () => {
        const matIconReg = inject(MatIconRegistry);
        matIconReg.setDefaultFontSetClass('material-symbols-outlined');
      },
      multi: true,
      deps: [MatIconRegistry],
    },
  ],
};
