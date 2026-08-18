import { collection, getDocs } from "firebase/firestore";
import { db } from "./config.js";

export const getProducts = async () => {
  try {
    const snapshot = await getDocs(collection(db, "products"));

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  } catch (error) {
    console.error("Error loading products:", error);
    throw error;
  }
};