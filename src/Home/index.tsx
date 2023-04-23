import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Feather } from "react-native-vector-icons";
import { Contacts } from "../components/contacts";
import { ModalCreateContact } from "../components/ModalCreateContact";
import { useState } from "react";

export function Home() {
  const [handleRemoveContatcts, setHandleRemoveContacts] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [contacts, setContacts] = useState([
    {
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
      name: "Abraão",
      lastName: "Sena",
      phoneNumber: "(21) 9454-2834",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/49.jpg",
      name: "Marina",
      lastName: "Souza",
      phoneNumber: "(44) 98976-9456",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/30.jpg",
      name: "Beatriz",
      lastName: "Classen",
      phoneNumber: "(21) 97656-9836",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/50.jpg",
      name: "Victor",
      lastName: "Oliveira",
      phoneNumber: "(11) 98383-1952",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/59.jpg",
      name: "Alle",
      lastName: "Vienna",
      phoneNumber: "(71) 96346-1937",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/86.jpg",
      name: "Maria",
      lastName: "Eduarda",
      phoneNumber: "(11) 98465-4590",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/31.jpg",
      name: "Duda",
      lastName: "Bittencourt",
      phoneNumber: "(11) 98465-4590",
    },
  ]);

  // criar nova variável de estado para armazenar o array ordenado
  const [sortedContacts, setSortedContacts] = useState(
    [...contacts].sort((a, b) => a.name.localeCompare(b.name))
  );

  // função para ordenar o array de contatos pelo nome
  function sortContactsByName() {
    setSortedContacts(
      [...contacts].sort((a, b) => a.name.localeCompare(b.name))
    );
  }

  function handleRemoveContact(){
    setHandleRemoveContacts(true)
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={styles.header}>
          <Text style={styles.contentText}>Meus contatos</Text>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text>
                <Feather name="plus" size={22} color="#E1E1E6" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>
                <Feather name="edit-2" size={22} color="#E1E1E6" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRemoveContact}>
              <Text>
                <Feather name="trash-2" size={22} color="#E1E1E6" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContent}>
          <Feather
            style={styles.iconSearch}
            name="search"
            size={18}
            color="#E1E1E6"
          />
          <TextInput
            style={styles.input}
            placeholder="Busque por nome ou por dados de contato..."
            placeholderTextColor="#E1E1E6"
          />
        </View>
      </View>

      <FlatList
        Style={styles.contentList}
        data={sortedContacts}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Contacts
            key={item.phoneNumber}
            name={item.name}
            lastName={item.lastName}
            number={item.phoneNumber}
            avatar={item.avatar}
            showIcon={handleRemoveContatcts}
            closeIcon={setHandleRemoveContacts}
            contactList={contacts}
            handleContactList={setContacts}
            showsVerticalScrollIndicator={false}
          />
        )}
      />

      <ModalCreateContact visible={modalVisible} noVisible={setModalVisible} />
    </View>
  );
}
