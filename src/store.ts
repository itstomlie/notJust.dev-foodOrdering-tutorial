import { create } from "zustand";
import { CartItem, PizzaSize, Product } from "./types";

interface CartState {
  cart: CartItem[];
  addToCart: ({
    product,
    size,
    quantity,
  }: {
    product: Product;
    size: PizzaSize;
    quantity: number;
  }) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: ({ product, size, quantity }) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.id === `${product.id}-${size}`,
      );

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        };
      }

      return {
        cart: [
          ...state.cart,
          {
            id: `${product.id}-${size}`,
            product,
            product_id: product.id,
            size,
            quantity,
          },
        ],
      };
    }),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart:
        quantity <= 0
          ? state.cart.filter((item) => item.id !== id)
          : state.cart.map((item) =>
              item.id === id ? { ...item, quantity } : item,
            ),
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));
