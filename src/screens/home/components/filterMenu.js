import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

export const FilterMenu = ({ children }) => {
  const [filter, setFilter] = useState();

  const data = [
    { label: "Regular", value: "regular" },
    { label: "Work", value: "work" },
    { label: "Lifestyle", value: "lifestyle" },
    { label: "Study", value: "study" },
  ];
  return (
    <Menu onSelect={(value) => setFilter(filter)}>
      <MenuTrigger>{children}</MenuTrigger>
      <MenuOptions>
        {data.map((item, _) => {
          <MenuOption value={item.value} text={item.label} />;
        })}
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
