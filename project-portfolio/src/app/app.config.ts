import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { auraPreset } from './themePreset';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
            theme: {
                preset: auraPreset,
                options: {
                    cssLayer: {
                        name: 'primeng',
                        order: 'theme, base, primeng'
                    }
                }
            }
        })
  ]
};
