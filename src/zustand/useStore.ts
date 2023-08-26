import { create } from "zustand";
import { StoreState } from "./StoreState";

const useStore = create<StoreState>((set) => ({
    cart: [],
    addCart: (product) => {
        set((state) => {
            const exist = state.cart.find((x) => x.id === product.id);
            if (exist) {
                return {
                    cart: state.cart.map((x) =>
                        x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                    ),
                }
            } else {
                return {
                    cart: [
                        ...state.cart,
                        {
                            ...product,
                            qty: 1
                        }
                    ]
                }
            }
        });
    },
    delCart: (product) => {
        set((state) => {
            const exist = state.cart.find((x) => x.id === product.id);
            if (exist && exist.qty === 1) {
                return {
                    cart: state.cart.filter((x) => x.id !== exist.id),
                }
            } else {
                return {
                    cart: state.cart.map((x) =>
                        x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                    ),
                }
            }
        });
    }
}));

export default useStore;