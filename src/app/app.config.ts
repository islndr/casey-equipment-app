import { importProvidersFrom } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { FirebaseOptions } from 'firebase/app';  // ✅ Import for typing
import { environment } from '../environments/environment';

const firebaseConfig: FirebaseOptions = environment.firebaseConfig;

export const appConfig = {
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage())
    )
  ]
};