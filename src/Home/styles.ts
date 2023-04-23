import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C2F",
    height: "100%",
  },
  contentText: {
    color: "#E1E1E6",
    fontWeight: "bold",
    fontSize: 18,
  },
  menu: {
    height: 200,
    backgroundColor: "#16151E",
    padding: 40,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    width: "92%",
    backgroundColor: "#24243D",
    height: 45,
    color: "#E1E1E6",
    fontSize: 14,
    paddingRight: 12,
  },
  inputContent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 45,
    marginTop: 25,
  },
  iconSearch: {
    padding: 15,
    paddingRight: 5,
    backgroundColor: "#24243D",
  },
  contentList: {
    padding: 20,
  },

});
