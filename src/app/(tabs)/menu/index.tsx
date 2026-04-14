import { FlatList, View } from "react-native";

import { Product } from "@/src/types";
import products from "@assets/data/products";
import { ProductListItem } from "@src/components/menuScreen/ProductListItem";
import { Stack } from "expo-router";

type ListItem = Product | { id: "empty" };

export default function MenuScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Menu" }} />
      <FlatList
        data={
          (products.length % 2 !== 0
            ? [...products, { id: "empty" as const }]
            : products) as ListItem[]
        }
        renderItem={({ item }) =>
          item.id === "empty" ? (
            <View style={{ flex: 1 }} />
          ) : (
            <ProductListItem product={item} />
          )
        }
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}
