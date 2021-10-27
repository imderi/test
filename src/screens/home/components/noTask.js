import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export const NoTask = () => {
  return (
    <View style={styles.container}>
      <Icon name="emoji-sad" size={50} color="grey" />
      <Text style={styles.title}>No Task</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "grey",
    marginTop: 5,
  },
});
