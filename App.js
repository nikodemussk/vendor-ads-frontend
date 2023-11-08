import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import CreateEvent from './create_event/CreateEvent';
import ViewEvent from './view_event/ViewEvent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login/Login';
import RegisterAccount from './register_account/RegisterAccount';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from './bottom_navigation/BottomNavigation';
import HomeScreen from './home/Home';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

export default function App() {
  const Stack = createNativeStackNavigator();

  return (

    // <NavigationContainer>
    //  <BottomNavigation />
    // </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    // <View style={styles.content}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Login' }}>
          </Stack.Screen>
          <Stack.Screen
            name="RegisterAccount"
            component={RegisterAccount}
            options={{ title: 'Register Account' }}>
          </Stack.Screen>
          <Stack.Screen
            name="BottomNavigation"
            component={BottomNavigation}
            backBehavior="none"
          // options={{ title: 'Login' }}
          >
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      // </View>
      // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    maxWidth: 450,
  },
});
