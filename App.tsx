const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Help from "./screens/Help";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import BlutoothConnectivity from "./screens/BlutoothConnectivity";
import Sensor1 from "./screens/Sensor1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Help"
              component={Help}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BlutoothConnectivity"
              component={BlutoothConnectivity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sensor"
              component={Sensor1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
