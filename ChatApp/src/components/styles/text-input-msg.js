import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    height: 60,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  inputText: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: "78%",
    height: 50,
    marginLeft: 20,
  },
  fab: {
    borderRadius: 50,
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    // elevation: 5,
    marginTop: 10,
    marginLeft: 10,
  },
});
