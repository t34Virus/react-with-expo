import React from "react";
import { StyleSheet } from "react-native";
import Toast from "./src/components/notifications/Toast";

export default function App() {
  return (
    <Toast />
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  test: {
    fontSize: 16,
    marginTop: 10,
  },
});