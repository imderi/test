import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";

export const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>Add a new task</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 200,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#3d7cf4",
    position: "absolute",
    alignSelf: "center",
    bottom: 50,
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
    marginRight: 10,
  },
});
