import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import { styles } from "./constacts";
import { Feather } from "react-native-vector-icons";
import { useState } from "react";

interface contactsProps {
  key: void;
  name: string;
  lastName: string;
  number: string;
  avatar: string;
  showIcon: string;
  closeIcon: string;
  contactList: void;
  handleContactList: string;
}

export function Contacts({
  name,
  lastName,
  number,
  avatar,
  showIcon,
  closeIcon,
  contactList,
  handleContactList,
}: contactsProps) {
  
  
  function handleRemoveContatc() {
    closeIcon(false);

    Alert.alert("Contato excluido com sucesso!")

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleRemoveContatc}
        style={showIcon ? styles.showIcon : styles.closeIcon}
      >
        <Feather name="trash-2" size={18} color="#F75A68" />
      </TouchableOpacity>

      <View style={styles.contactContainer}>
        <View style={styles.contactInfo}>
          <Image style={styles.avatar} source={{ uri: `${avatar}` }} />

          <View style={styles.contactContent}>
            <Text style={styles.contactName}>
              {name} {lastName}
            </Text>
            <Text style={styles.phoneNumber}>{number}</Text>
          </View>
        </View>

        <View style={styles.callIcons}>
          <TouchableOpacity>
            <Feather name="message-square" size={18} color="#633BBC" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather name="phone" size={18} color="#07847E" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather name="video" size={18} color="#9A00B3" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
