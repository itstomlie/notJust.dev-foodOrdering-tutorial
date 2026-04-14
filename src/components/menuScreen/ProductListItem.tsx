import Colors from "@src/constants/Colors";
import { defaultPizzaImage } from "@src/constants/constants";
import { Product } from "@src/types";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet } from "react-native";
import { Text } from "../Themed";

type ProductListItemProps = {
  product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: product.image || defaultPizzaImage }}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    maxWidth: "49%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  price: {
    color: Colors.light.tint,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
