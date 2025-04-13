import { CartItem } from "./cart-item.model";

export interface OrderHistoryItem {
  address: string;
  cartItems: CartItem[];
  createdAt: Date;
  fullName: string;
  id: string;
  orderTotal: number;
  phoneNumber: string;
}
