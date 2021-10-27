import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/core";

import { useDispatch } from "react-redux";
import { removeTask, setTaskStatus } from "../../../redux/slices/taskSlice";

export const TaskItem = ({ item, navigation }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { id, name, desc, completed } = item;

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, { marginLeft: 10 }]}>
        <BouncyCheckbox
          size={30}
          fillColor="green"
          isChecked={completed}
          onPress={(isChecked) => {
            dispatch(setTaskStatus({ id: id, completed: !completed }));
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigate("TaskEditor", { item: item, editMode: true })}
        style={styles.taskContainer}
      >
        <Text style={!completed ? styles.taskName : styles.taskNameCompleted}>
          {name}
        </Text>

        {!!desc && (
          <Text style={!completed ? styles.taskDesc : styles.taskDescCompleted}>
            {desc}
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(removeTask(id))}
        style={styles.buttonContainer}
      >
        <Icon name="ios-trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  buttonContainer: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  taskContainer: {
    flex: 1,
    justifyContent: "center",
  },
  taskName: {
    fontSize: 16,
  },
  taskNameCompleted: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "grey",
  },
  taskDesc: {
    fontSize: 12,
    color: "grey",
  },
  taskDescCompleted: {
    fontSize: 12,
    textDecorationLine: "line-through",
    color: "grey",
  },
});
