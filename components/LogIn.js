import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function LogIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Onboarding")}
      >
        <FontAwesome name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>
        Log in to ChatBox <Text style={styles.underline}></Text>
      </Text>
      <Text style={styles.subtitle}>
        Welcome back! Sign in using your social account or email to continue us.
      </Text>
      <View style={styles.socialButtons}>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={24} color="#1877F2" />
          </TouchableOpacity>
        </View>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={24} color="#DB4437" />
          </TouchableOpacity>
        </View>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="apple" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.divider} />
      </View>
      <TextInput style={styles.input} placeholder="Your Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
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
    marginBottom: 24,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialButtonsContainer: {
    width: 55,
    height: 55,
    borderRadius: 35,
    borderWidth: 1.1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  socialButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginHorizontal: 10,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1.1,
    backgroundColor: "#D1D5DB",
  },
  orText: {
    color: "#D1D5DB",
    marginHorizontal: 10,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB",
    paddingVertical: 8,
    marginBottom: 24,
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#F3F4F6",
    paddingVertical: 12,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#6B7280",
  },
  forgotPassword: {
    color: "#10B981",
  },
});
