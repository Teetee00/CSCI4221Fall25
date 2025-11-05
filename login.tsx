import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { colors } from "./theme";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" style={styles.input} placeholderTextColor={colors.primary} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry placeholderTextColor={colors.primary} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Link href="/" asChild>
        <TouchableOpacity>
          <Text style={styles.backText}>← Back to Home</Text>
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
    fontSize: 26,
    color: colors.text,
    fontWeight: "600",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    backgroundColor: colors.card,
    borderRadius: 15,
    padding: 12,
    marginVertical: 6,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
  backText: {
    color: colors.primary,
    fontSize: 16,
    marginTop: 10,
  },
});
