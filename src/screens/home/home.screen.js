import React, { useState, useEffect } from "react";
import { styles } from "./home.styles";
import { View, FlatList, TextInput } from "react-native";
import { TaskItem } from "./components/taskItem";
import { AddButton } from "../../components/button/addButton";
import { NoTask } from "./components/noTask";

import { useSelector } from "react-redux";

export const HomeScreen = ({ navigation }) => {
  const { tasks } = useSelector((state) => state);

  const [masterData, setMasterData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [search, setSearch] = useState();

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const textData = text.toUpperCase();
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  useEffect(() => {
    setMasterData(tasks);
    setFilteredData(tasks);
  }, [tasks]);

  return (
    <View style={styles.container}>
      {!!tasks.length && (
        <View>
          <TextInput
            style={styles.searchBar}
            value={search}
            placeholder="Search task name..."
            onChangeText={(text) => searchFilter(text)}
          />
        </View>
      )}

      {tasks.length ? (
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={filteredData}
          renderItem={(item) => <TaskItem {...item} />}
          keyExtractor={(item, _) => "key-" + item.id}
        />
      ) : (
        <NoTask />
      )}
      <AddButton
        onPress={() =>
          navigation.navigate("TaskEditor", { item: "", editMode: false })
        }
      />
    </View>
  );
};
