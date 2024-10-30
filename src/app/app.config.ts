import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

// provideAnimationsAsync('noop') desabilta animações no projeto.
// Animações podem deixar o projeto lento
// Passo (9):
//    Selecionar que o pacote tenha animações mas que fique desabilitado:
//    Include the Angular animations module? Include, but disable animations

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync('noop'),
    provideHttpClient()
  ]
};
