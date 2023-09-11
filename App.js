import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
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
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
