import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideEnvironmentInitializer,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { initHightlighter } from './compile';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([], withComponentInputBinding()),
    provideAppInitializer(async () => await initHightlighter()),
    provideEnvironmentInitializer(() => {
      const matIconReg = inject(MatIconRegistry);
      matIconReg.setDefaultFontSetClass('material-symbols-outlined');
    }),
  ],
};
