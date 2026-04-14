import products from "@/assets/data/products";
import Button from "@/src/components/Button";
import { defaultPizzaImage } from "@/src/constants/constants";
import { useCartStore } from "@/src/store";
import { PizzaSize } from "@/src/types";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const PIZZA_SIZES: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = React.useState<PizzaSize>(
    PIZZA_SIZES[0],
  );

  const { addToCart } = useCartStore();

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <View>
        <Stack.Screen options={{ title: "Product not found" }} />
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />

      <View style={{ padding: 20, flex: 1, justifyContent: "space-between" }}>
        <View>
          <Text style={styles.selectSizeText}>Select Size</Text>
          <View style={styles.sizesContainer}>
            {PIZZA_SIZES.map((size) => (
              <Pressable
                key={size}
                style={[
                  styles.sizeContainer,
                  selectedSize === size && styles.selectedSizeContainer,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  style={[
                    styles.sizeText,
                    selectedSize === size && styles.selectedSizeText,
                  ]}
                >
                  {size}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
        <View>
          <Button
            text={`Add to Cart - $${product.price}`}
            onPress={() => {
              addToCart({ product, size: selectedSize, quantity: 1 });
              Toast.show({
                type: "success",
                text1: "Added to cart!",
                text2: `${product.name} (${selectedSize})`,
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  selectSizeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  sizesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  sizeContainer: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent: "center",
  },
  selectedSizeContainer: {
    backgroundColor: "tomato",
  },
  sizeText: {
    color: "gray",
    fontSize: 16,
    fontWeight: "semibold",
    textAlign: "center",
  },
  selectedSizeText: {
    color: "white",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductDetailScreen;
