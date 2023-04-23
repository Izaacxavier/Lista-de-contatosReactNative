import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#16151E",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContact: {
    backgroundColor: "#24243D",
    height: 40,
    color: "#E1E1E6",
    fontSize: 16,
    padding: 12,
    marginBottom: 8,
    width: '100%'
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#16151E",
    marginTop: 40,
    padding: 20,
  },
  userAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#66676B',
  },
  avatarContainer: {
    flexDirection: "row",
    height: 150,
    justifyContent: "center",
    width: "100%",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#E1E1E6",
    fontSize: 22,
  },
  iconPlus: {
    position: "absolute",
    marginTop: 90,
    left: 200,
    padding: 5,
    backgroundColor: "#24243D",
    borderWidth: 1,
    borderColor: '#66676B',
    borderRadius: 50,
  },
  inputPhone:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 22,
    gap: 5
  }
});
