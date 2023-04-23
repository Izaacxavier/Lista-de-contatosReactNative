import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    color: "#E1E1E6",
  },
  container: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: 'center',
    gap: 5,
    marginTop: 30,
    marginBottom: 20,
    paddingLeft: 14,
    paddingRight: 14,
  },
  avatar: {
      width: 45,
      height: 48,
      borderRadius: 30,
  },
  contactContent:{
      width: 150,
      flexDirection: 'column',
      gap: 5,
  },
  contactName:{
      color: "#E1E1E6",
      fontWeight: 'bold',
      fontSize: 16,

  },
 phoneNumber: {
      color:'#8C8CBA',
      fontSize: 12,
  },
  showIcon:{
    display: 'flex',
    paddingRight: 85
  },
  closeIcon:{
    display: 'none'
  },
  contactContainer:{
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    justifyContent:'space-between'
  },
  contactInfo:{
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center'
  },
  callIcons:{
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  }

});
