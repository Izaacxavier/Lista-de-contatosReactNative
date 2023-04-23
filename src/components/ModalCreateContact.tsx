import {View,Text,TouchableOpacity,
    TextInput, Modal, Image, Button } from "react-native";
import { Feather } from "react-native-vector-icons";
import { styles } from "./Modal";
import { useState } from "react";



export function ModalCreateContact({visible, noVisible}) {


  function closeModal(){
    noVisible(false)
  }
  function closeModalAndCreateNewContact(){
    noVisible(false)
  }


  return (
    <View style={styles.modalContainer}>
      <Modal  animationType="slide" visible={visible} transparent={true}>
       <View style={styles.modalContent}>
         <View style={styles.header}>
         <TouchableOpacity onPress={closeModal}>
            <Text>
              <Feather name="chevron-left" size={26} color="#E1E1E6" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModalAndCreateNewContact}>
            <Text>
              <Feather name="user-plus" size={26} color="#E1E1E6" />
              </Text>
            </TouchableOpacity>
         </View>
      <View style={styles.avatarContainer}>
      <Image style={styles.userAvatar} source={{ uri:'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} />
      <TouchableOpacity style={styles.iconPlus}><Feather name="plus" size={15} color="#E1E1E6" /></TouchableOpacity>
      
      </View>
        <TextInput style={styles.inputContact} placeholder="Fisrt name" placeholderTextColor="#E1E1E6">
        </TextInput>
        <TextInput style={styles.inputContact} placeholder="Last name" placeholderTextColor="#E1E1E6"></TextInput>
        <View style={styles.inputPhone}>
        <Feather name="phone" size={18} color="#E1E1E6" padding={10} backgroundColor="#24243D" marginBottom={8}/>
        <TextInput
         style={styles.inputContact}
         keyboardType="numeric"
         placeholder="Phone number" placeholderTextColor="#E1E1E6"></TextInput>

        </View>
       </View>
      </Modal>
    </View>
  );
}
