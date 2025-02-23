import {
  ApplicationConfig,
  inject,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { initHightlighter } from './compile';
import { MatIconRegistry } from '@angular/material/icon';
import { provideAppInitializer } from '@angular/core';
import { provideEnvironmentInitializer } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideAnimationsAsync(),
    provideRouter([],withComponentInputBinding()),
    provideAppInitializer(async () => await initHightlighter()),
    provideEnvironmentInitializer(() => {
      const matIconReg = inject(MatIconRegistry);
      matIconReg.setDefaultFontSetClass('material-symbols-outlined');
    }),
  ],
};
