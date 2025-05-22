import {
  ApplicationConfig,
  inject,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { initHightlighter } from './compile';
import { MatIconRegistry } from '@angular/material/icon';
import { provideAppInitializer } from '@angular/core';
import { provideEnvironmentInitializer } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter([],withComponentInputBinding()),
    provideAppInitializer(async () => await initHightlighter()),
    provideEnvironmentInitializer(() => {
      const matIconReg = inject(MatIconRegistry);
      matIconReg.setDefaultFontSetClass('material-symbols-outlined');
    }),
  ],
};
