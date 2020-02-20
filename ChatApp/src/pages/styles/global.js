import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderBottomColor: '#797979',
    borderBottomWidth: 1,
    width: "80%"
  },
  header: {
    position: "absolute",
    top: 0,
    height: 50,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    // borderBottomColor: "#797979",
    flexDirection: "row",
    padding: 16,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 15,
    color: "#797979",
  },
});
