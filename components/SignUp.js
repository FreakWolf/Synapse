import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // console.log("User signed up successfully!", userCredential);
      navigation.navigate("Onboarding");
    } catch (error) {
      if (error.code === "auth/network-request-failed") {
        alert(
          "Error: Network request failed. Please check your internet connection and try again."
        );
      } else {
        // console.error("error signing up", error);
        alert("Error signing up. Please try again.");
      }
    }
  };

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
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
    borderBottomColor: "#D1D5DB",
    paddingVertical: 10,
    marginBottom: 20,
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
