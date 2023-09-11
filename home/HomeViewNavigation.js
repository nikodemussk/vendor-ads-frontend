import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import VendorDetailsView from '../vendor_details/VendorDetailsView';
import PayVendorView from '../pay_vendor/PayVendorView';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

export default function HomeViewNavigation() {
    const Stack = createNativeStackNavigator();
    return (

        // <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    // headerShown: false
                }}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    //   backBehavior="none"
                    options={{ title: 'Home' }}
                >
                </Stack.Screen>
                <Stack.Screen
                    name="VendorDetailsView"
                    component={VendorDetailsView}
                    //   backBehavior="none"
                    options={{ title: 'Vendor Details' }}
                >
                </Stack.Screen>
                <Stack.Screen
                    name="PayVendorView"
                    component={PayVendorView}
                    //   backBehavior="none"
                    options={{ title: 'Vendor Details' }}
                >
                </Stack.Screen>
            </Stack.Navigator>
        // </NavigationContainer>
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
