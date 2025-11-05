import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { colors } from "./theme";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Enable Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ true: colors.primary, false: colors.card }}
        />
      </View>

      <Link href="/" style={styles.backText}>
        ← Back to Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    color: colors.text,
    fontWeight: "600",
    marginBottom: 30,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: colors.text,
  },
  backText: {
    textAlign: "center",
    marginTop: 30,
    color: colors.primary,
    fontSize: 16,
  },
});
