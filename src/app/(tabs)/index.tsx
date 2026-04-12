import { FlatList, View } from "react-native";

import products from "@assets/data/products";
import { ProductListItem } from "@src/components/menuScreen/ProductListItem";
import { Product } from "@/src/types";

type ListItem = Product | { id: "empty" };

export default function MenuScreen() {
  return (
    <View>
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
