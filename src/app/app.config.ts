import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { initHightlighter } from './compile';

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
  ],
};
