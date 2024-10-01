import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Home() {
  const chats = [
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
    {
      name: "Rohit Singh",
      message: "How are you today?",
      time: "2 min ago",
      count: 3,
    },
  ];

  const statuses = [
    "My status",
    "Rohit Singh",
    "Rohit Singh",
    "Rohit Singh",
    "Rohit Singh",
    "Rohit Singh",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="search" size={24} color="white" />
        <Text style={styles.headerTitle}>Home</Text>
        <Image source={{ uri: "#" }} style={styles.profieImage} />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.statusContainer}
      >
        {statuses.map((name, index) => (
          <View key={index} style={styles.statusItem}>
            <View style={styles.statusImageContainer}>
              <Image source={{ uri: "#" }} style={styles.statusImage} />
              {name === "My status" && (
                <FontAwesome
                  name="plus-circle"
                  size={16}
                  color="green"
                  style={styles.plusIcon}
                />
              )}
            </View>
            <Text style={styles.statusText}>{name}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.chatsContainer}>
        <ScrollView
          //   vertical
          showsVerticalScrollIndicator={false}
          style={styles.messageContainer}
        >
          {chats.map((chat, index) => (
            <View key={index} style={styles.chatItem}>
              <View style={styles.chatLeft}>
                <Image source={{ uri: "#" }} style={styles.chatImage} />
                <View style={styles.chatTextContent}>
                  <Text style={styles.chatName}>{chat.name}</Text>
                  <Text style={styles.chatMessage}>{chat.message}</Text>
                </View>
              </View>
              <View style={styles.chatRight}>
                <Text style={styles.chatTime}>{chat.time}</Text>
                <View style={styles.chatCountContainer}>
                  <Text style={styles.chatCount}>{chat.count}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        {["Message", "Calls", "Contacts", "Settings"].map((item, index) => (
          <TouchableOpacity key={index} style={styles.footerItem}>
            <FontAwesome name={item.toLowerCase()} size={24} color="gray" />
            <Text style={styles.footerText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 28,
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  profieImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  statusContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  statusItem: {
    alignItems: "center",
    marginRight: 16,
  },
  statusImageContainer: {
    position: "relative",
  },
  statusImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "white",
  },
  plusIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 8,
    padding: 2,
    color: "white",
  },
  statusText: {
    color: "white",
    marginTop: 4,
    fontSize: 12,
  },
  chatsContainer: {
    flex: 50,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 16,
  },
  chatItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  chatLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  chatImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  chatTextContent: {
    marginLeft: 12,
  },
  chatName: {
    fontWeight: "bold",
  },
  chatMessage: {
    color: "gray",
  },
  chatRight: {
    alignItems: "flex-end",
  },
  chatTime: {
    color: "gray",
    fontSize: 12,
  },
  chatCountContainer: {
    backgroundColor: "red",
    borderRadius: 12,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  chatCount: {
    color: "white",
    fontSize: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 16,
    borderTopColor: "#f0f0f0",
    backgroundColor: "white",
  },
  footerItem: {
    alignItems: "center",
  },
  footerText: {
    color: "gray",
    fontSize: 12,
    marginTop: 4,
  },
});
