// NPM packages
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

// Project files
import { authInstance } from "scripts/firebase";

export async function createAccount(email, password) {
  const account = { isCreated: false, payload: "" };

  try {
    const userCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.payload = userCredential.user.uid;
    account.isCreated = true;
  } catch (error) {
    account.payload = error.message;
  }

  return account;
}

export async function signIn(email, password) {
  const account = { isLogged: false, payload: "" };

  try {
    const userCredential = await signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.payload = userCredential.user.uid;
    account.isLogged = true;
  } catch (error) {
    account.payload = error.message;
  }

  return account;
}


export async function recoverPassword(email) {
  const account = { isReset: false, payload: "" };

  try {
    await sendPasswordResetEmail(authInstance, email);
    account.payload = "We sent you instructions how to reset your password. Please check your email";
    account.isReset = true;
  } catch (error) {
    account.payload = error.message;
  }
  return account;
}
