import { db } from "./config/firebase.config";
import { collection, addDoc } from "firebase/firestore";

export const testFirebaseConnection = async () => {
  try {
    const testCollection = collection(db, "test");
    await addDoc(testCollection, {
      test: "Hello Firebase",
      timestamp: new Date()
    });
    console.log("Firebase connection successful!");
    return true;
  } catch (error) {
    console.error("Firebase connection error:", error);
    return false;
  }
}; 