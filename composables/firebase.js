import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
import { getAuth, connectAuthEmulator } from "firebase/auth"
import { getFunctions, connectFunctionsEmulator } from "firebase/functions"
import firebase from "~/firebase"
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const app = !getApps.length ? initializeApp(firebase.initApp) : getApp()

if (firebase.emulator.enabled) {
  const db = getFirestore(app)
  connectFirestoreEmulator(
    db,
    location.hostname,
    firebase.emulator.firestorePort,
  )

  const auth = getAuth(app)
  connectAuthEmulator(auth, firebase.emulator.authURL)

  const functions = getFunctions(app)
  connectFunctionsEmulator(
    functions,
    location.hostname,
    config.firebase.emulator.functionsPort,
  )
}
