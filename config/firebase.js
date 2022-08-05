// TODO: Replace the following with your app's Firebase project configuration
const firebase = {
  initApp: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  },
  emulator: {
    enabled: process.env.USE_EMULATOR === "true",
    authURL: `${location.protocol}//${location.hostname}:${
      process.env.EMULATOR_AUTH_PORT ?? "9099"
    }`,
    firestorePort: process.env.EMULATOR_FIRESTORE_PORT ?? "8080",
    functionsURL:
      process.env.USE_EMULATOR === "true"
        ? process.env.EMULATOR_FUNCTIONS_URL
        : process.env.FUNCTIONS_URL,
    functionsPort: process.env.EMULATOR_FUNCTIONS_PORT ?? "5001",
  },
}

export default firebase
