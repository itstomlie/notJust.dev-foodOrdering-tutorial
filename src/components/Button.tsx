import { forwardRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  button: {
    backgroundColor: "#e74c3c",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.7,
  },
});

export default Button;
