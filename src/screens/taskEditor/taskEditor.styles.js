import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    nameInput: {
        height: 45,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    categoryPicker: {
        borderRadius: 10,
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    categoryPickerPlaceholder: {
        color: "#c3c4c5",
    },
    descriptionInput: {
        minHeight: 100,
        maxHeight: 300,
        backgroundColor: "white",
        borderRadius: 10,
        paddingTop: 15,
        padding: 10,
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    textTitle: {
        fontSize: 16,
        margin: 5,
        marginTop: 10,
    },
    textError: {
        fontSize: 11,
        marginLeft: 5,
        color: "red",
    },
});
