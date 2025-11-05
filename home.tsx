import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { colors } from "./theme"; // import theme 

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌿 Welcome to EasyEats</Text>
      <Text style={styles.subtitle}>Your earth-tone dining companion</Text>

      <Link href="/login" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Login</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/settings" asChild>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: colors.text,
    fontWeight: "600",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.primary,
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 5,
  },
  buttonSecondary: {
    backgroundColor: colors.accent,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
});


