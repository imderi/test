import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar: {
        height: 45,
        backgroundColor: "white",
        padding: 10,
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 10,
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
    flatListContainer: {
        margin: 10,
        flex: 1,
    },
});
