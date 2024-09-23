import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Onboarding")}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>
        Sign up with Email <Text style={styles.underline}></Text>
      </Text>
      <Text style={styles.subtitle}>
        Get chatting with friends and family by signing up for our chat app!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#008080"
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor="#008080"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#008080"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#008080"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
  },
  underline: {
    borderBottomWidth: 4,
    borderBottomColor: "#008080",
  },
  subtitle: {
    color: "#A1A1A1",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
    paddingVertical: 10,
    marginBottom: 20,
    color: "#008080",
  },
  button: {
    width: "100%",
    backgroundColor: "#EFEFEF",
    paddingVertical: 15,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#008080",
    fontWeight: "600",
  },
});
