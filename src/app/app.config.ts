import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({ projectId: "orcas-2cca0", appId: "1:850990546256:web:646de4e66e57851b980055", storageBucket: "orcas-2cca0.appspot.com", apiKey: "AIzaSyC7whP8M7_GhJFmlthuQzCJnarRYbhUmjk", authDomain: "orcas-2cca0.firebaseapp.com", messagingSenderId: "850990546256", measurementId: "G-NWXZ9NZ0D2" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
