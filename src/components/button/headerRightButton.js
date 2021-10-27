import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// ios-filter

export const HeaderRightButton = ({ onPress, variant }) => {
  const [icon, setIcon] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (variant === "clear") {
      setIcon("reload");
      setTitle("Clear");
    } else if (variant === "filter") {
      setIcon("ios-filter");
      setTitle("Filter");
    } else {
      setIcon("ellipse-outline");
      setTitle("Button");
    }
  }, [variant]);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={icon} size={24} />
      <Text style={styles.textTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 10,
  },
});
