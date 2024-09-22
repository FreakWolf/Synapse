import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Frame1 from "./components/Frame1";
import Onboarding from "./components/Onboarding";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Frame1"
          component={Frame1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false, headerLeft: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
