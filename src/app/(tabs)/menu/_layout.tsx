import { FadeToast } from "@/src/components/FadeToast";
import Colors from "@/src/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import Toast from "react-native-toast-message";

export default function MenuStack() {
  return (
    <>
      <Stack
        screenOptions={{
          headerRight: () => (
            <Link href="/cart" asChild>
              <Pressable
                style={{
                  backgroundColor: "transparent",
                  width: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {({ pressed }) => (
                  <FontAwesome
                    name="shopping-cart"
                    size={20}
                    color={Colors.light.tint}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Toast topOffset={120} />
    </>
  );
}
