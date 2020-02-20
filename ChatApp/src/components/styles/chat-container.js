import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  textContainer: {
    marginLeft: 20,
    justifyContent: "center",
  },
  contactText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e1e1e",
  },
  msgText: {
    fontSize: 12,
    color: "#ccc"
  },
  newMsgContainer: {
    borderRadius: 50,
    backgroundColor: "#797979",
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  newMsgText: {
    fontWeight: "bold",
    color: "#fff",
  },
});
