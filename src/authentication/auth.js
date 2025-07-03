// src/Firebase/authService.js

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signOut,updateProfile } from "firebase/auth";
import {ap} from '../Firebase/firebase'
import { getDatabase,ref, set, get } from "firebase/database";

const auth = getAuth(ap);
const db = getDatabase(ap);
const GoogleProvider = new GoogleAuthProvider();

// ✅ Create Account (with wallet + name setup)
export async function createAccount({ name, email, password }) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // ✅ Update display name
    await updateProfile(userCredential.user, {
      displayName: name,
    });

    // ✅ Add wallet entry in Realtime DB
    await set(ref(db, "users/" + userCredential.user.uid), {
      name: name,
      email: email,
      wallet: 0,
    });

    console.log("Account created & wallet initialized.");
    return userCredential.user;

  } catch (error) {
    console.error("Error creating account:", error.message);
    throw error;
  }
}

// ✅ Google Sign In (also wallet creation if new user)
export async function SigninGoogle() {
  try {
    const res = await signInWithPopup(auth, GoogleProvider);

    // ✅ Check if wallet already exists
    const userRef = ref(db, "users/" + res.user.uid);
    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
      await set(userRef, {
        name: res.user.displayName || "",
        email: res.user.email,
        wallet: 0,
      });
    }

    return res.user;

  } catch (error) {
    console.error("Google sign-in error:", error.message);
    throw error;
  }
}

// ✅ Email/Password Login
export async function login({ email, password }) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
}

// ✅ Logout
export async function logout() {
  try {
    await signOut(auth);
    console.log("Logged out");
  } catch (error) {
    console.error("Logout error:", error.message);
    throw error;
  }
}


export { auth };
