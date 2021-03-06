import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import * as firebaseui from "firebaseui";

// console.log(process.env.REACT_APP_FIREBASE_API_KEY);
// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_API_KEY,
// 	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// 	projectId: process.env.REACT_APP_PROJECT_ID,
// 	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
// 	appId: process.env.REACT_APP_APP_ID,
// };
const firebaseConfig = {
	apiKey: "AIzaSyBt-mbrUrjxavhEd6tBvsaxYAVbsRjKUVY",
	authDomain: "personalsite-df277.firebaseapp.com",
	projectId: "personalsite-df277",
	storageBucket: "personalsite-df277.appspot.com",
	messagingSenderId: "758186305418",
	appId: "1:758186305418:web:b104425385e75f9fc2ca73",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app, "gs://personalsite-df277.appspot.com/");
const auth = getAuth(app);
export { db, storage, auth };
