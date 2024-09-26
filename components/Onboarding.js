import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Onboarding() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#000000", "#4b0082"]} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../assets/synapse.png")}
            style={styles.logo}
          />
          <Text style={styles.subtitle}>Synapse</Text>
        </View>
        <Text style={styles.title}>Connect friends easily & quickly</Text>
        <Text style={styles.description}>
          Our chat app is the perfect way to stay connected with your friends
          and family.
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
              <FontAwesome name="apple" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.divider} />
        </View>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.signUpButtonText}>Sign Up with mail</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          Existing Acconunt?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
            <Text
              style={[styles.loginText, { textDecorationLine: "underline" }]}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  subtitle: {
    fontSize: 14,
    color: "white",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 45,
  },
  description: {
    fontSize: 16,
    color: "#B0B0B0",
    textAlign: "center",
    marginBottom: 20,
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
    borderWidth: 1,
    borderColor: "white",
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
    backgroundColor: "#b0b0b0",
  },
  orText: {
    color: "#b0b0b0",
    marginHorizontal: 10,
  },
  signUpButton: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
  },
  signUpButtonText: {
    color: "#000000",
    fontSize: 16,
  },
  footerText: {
    color: "#B0B0B0",
  },
  loginText: {
    color: "white",
    textDecorationLine: "underline",
  },
});
