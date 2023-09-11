import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VendorDetailsView from '../vendor_details/VendorDetailsView';
import ViewVendorList from './ViewVendorList';
import ViewVendorCategory from '../view_vendor_category/ViewVendorCategory';
import BookVendorView from '../book_vendor/BookVendorView';

export default function VendorListNavigation() {
    const Stack = createNativeStackNavigator();
    return (

        // <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    // headerShown: false
                }}>
                <Stack.Screen
                    name="Vendor"
                    component={ViewVendorList}
                    //   backBehavior="none"
                    options={{ title: 'Vendor' }}
                >
                </Stack.Screen>
                <Stack.Screen
                    name="VendorByCategory"
                    component={ViewVendorCategory}
                    //   backBehavior="none"
                    options={{ title: 'Vendor By Category' }}
                >
                </Stack.Screen>
                <Stack.Screen
                    name="BookVendorView"
                    component={BookVendorView}
                    //   backBehavior="none"
                    options={{ title: 'Book Vendor' }}
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
