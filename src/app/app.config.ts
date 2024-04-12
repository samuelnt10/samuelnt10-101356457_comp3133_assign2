import { ApplicationConfig } from '@angular/core';
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router'; // Deprecated, but still using it for compatibility
import { provideClientHydration } from '@angular/platform-browser';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Import appRoutes instead of routes

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideClientHydration(), provideAnimationsAsync()]
};
