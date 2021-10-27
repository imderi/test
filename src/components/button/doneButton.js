import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const DoneButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>Done</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "row",
    width: 200,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#67b352",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
