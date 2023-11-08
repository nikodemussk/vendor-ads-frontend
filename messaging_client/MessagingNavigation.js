import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VendorDetailsView from '../vendor_details/VendorDetailsView';
// import ViewVendorList from './ViewVendorList';
import ViewVendorCategory from '../view_vendor_category/ViewVendorCategory';
import ViewProfile from './ViewProfile';
import RegisterAsAVendor from '../register_as_a_vendor/RegisterAsAVendor';

export default function MessagingNavigation() {
    const Stack = createNativeStackNavigator();
    return (

        // <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                // headerShown: false
            }}>
            <Stack.Screen
                name="Profile"
                component={ViewProfile}
                //   backBehavior="none"
                options={{ title: 'Profile' }}
            >
            </Stack.Screen>
            <Stack.Screen
                name="RegisterAsAVendor"
                component={RegisterAsAVendor}
                options={{ title: 'Register as a vendor' }}>
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
