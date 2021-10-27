import React, { useState, useLayoutEffect, useEffect } from "react";
import { Text, ScrollView, TextInput } from "react-native";
import { styles } from "./taskEditor.styles";
import DropDownPicker from "react-native-dropdown-picker";
import { HeaderRightButton } from "../../components/button/headerRightButton";
import { DoneButton } from "../../components/button/doneButton";

import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../redux/slices/taskSlice";
import { getContact } from "../../redux/slices/contactSlice";

export const TaskEditorScreen = ({ route, navigation }) => {
  const { item, editMode } = route.params;

  const dispatch = useDispatch();

  const [taskError, setTaskError] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const [openDrop, setOpenDrop] = useState(false);
  const category = [
    { label: "Regular", value: "regular" },
    { label: "Work", value: "work" },
    { label: "Lifestyle", value: "lifestyle" },
    { label: "Study", value: "study" },
    { label: "Phone Call", value: "phonecall" },
  ];

  const onPressClear = () => {
    setTaskName("");
    setTaskCategory("");
    setTaskDesc("");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editMode ? "Edit task" : "Add new",
      headerRight: () => (
        <HeaderRightButton
          variant="clear"
          onPress={() => {
            onPressClear();
          }}
        />
      ),
    });
  }, [navigation, editMode]);

  // redux saga
  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  // mode check
  useEffect(() => {
    if (editMode && item) {
      setTaskName(item.name);
      setTaskCategory(item.category);
      setTaskDesc(item.desc);
    }
  }, [item, editMode]);

  const handleSubmit = () => {
    if (taskName) {
      setTaskError(false);
      if (editMode) {
        dispatch(
          updateTask({
            id: item.id,
            name: taskName,
            desc: taskDesc,
            category: taskCategory,
          })
        );
        navigation.goBack();
      } else {
        dispatch(
          addTask({ name: taskName, desc: taskDesc, category: taskCategory })
        );
        navigation.goBack();
      }
    } else {
      setTaskError(true);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textTitle}>Name</Text>
      <TextInput
        value={taskName}
        onChangeText={(val) => setTaskName(val)}
        placeholder="Task name"
        style={styles.nameInput}
      />
      {taskError && <Text style={styles.textError}>Name cannot be empty</Text>}

      <Text style={styles.textTitle}>Category</Text>
      <DropDownPicker
        containerStyle={styles.categoryPicker}
        placeholderStyle={styles.categoryPickerPlaceholder}
        listMode="SCROLLVIEW"
        style={{ borderColor: "#f2f2f3" }}
        dropDownContainerStyle={{ borderColor: "#f2f2f3" }}
        open={openDrop}
        value={taskCategory}
        items={category}
        setOpen={setOpenDrop}
        setValue={setTaskCategory}
      />

      <Text style={styles.textTitle}>Description</Text>
      <TextInput
        value={taskDesc}
        onChangeText={(val) => setTaskDesc(val)}
        placeholder="Task description"
        style={styles.descriptionInput}
        multiline={true}
      />

      <DoneButton onPress={() => handleSubmit()} />
    </ScrollView>
  );
};
