import { collection, getDocs } from "firebase/firestore";
import { firestoreDb } from "../config";
import { Product } from "../models";

const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(firestoreDb, "products"));
    const products: Product[] = [];
    querySnapshot.forEach((doc) => {
      const id = doc.id
      const data = doc.data()
      const product = Object.assign({}, {
        id,
        ...data
      }) as Product
      products.push(product)
    });

    return products;
  } catch (error) {}
};

export { getProducts }
