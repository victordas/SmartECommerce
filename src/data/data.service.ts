import { collection, doc, getDocs } from "firebase/firestore";
import { firestoreDb } from "../config";
import { OrderHistoryItem, Product } from "../models";
import { store } from "../store";

const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(firestoreDb, "products"));
    const products: Product[] = [];
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      const product = Object.assign(
        {},
        {
          id,
          ...data,
        }
      ) as Product;
      products.push(product);
    });

    return products;
  } catch (error) {}
};

const getUserOrders = async () => {
  try {
    const { uid } = store.getState().userReducer.userData;
    const userOrderRef = collection(doc(firestoreDb, "users", uid!), "orders");
    const querySnapshot = await getDocs(userOrderRef);
    const orders = querySnapshot.docs.map((doc) => {
      const id = doc.id;
      const {
        address,
        cartItems,
        createdAt: timestamp,
        fullName,
        orderTotal,
        phoneNumber,
      } = doc.data();
      const createdAt = new Date(
        timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6
      );
      return {
        id,
        createdAt,
        address,
        cartItems,
        fullName,
        orderTotal,
        phoneNumber,
      } as OrderHistoryItem;
    });
    return orders;
  } catch (error) {}
};

export { getProducts, getUserOrders };
