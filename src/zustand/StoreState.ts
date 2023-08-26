import { CartModel } from "../model/CartModel";

export interface StoreState {
    cart: CartModel[];
    addCart: (product: CartModel) => void;
    delCart: (product: CartModel) => void;
}