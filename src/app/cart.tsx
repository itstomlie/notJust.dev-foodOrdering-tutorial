import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Platform, Text, View } from "react-native";
import { useCartStore } from "../store";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCartStore();

  console.warn("Cart items:", cart);
  return (
    <View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.product.name} - {item.size} - {item.quantity}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Cart;
