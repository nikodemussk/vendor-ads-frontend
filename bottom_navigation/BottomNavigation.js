import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegisterAsAVendor from '../register_as_a_vendor/RegisterAsAVendor';
import CreateEvent from '../create_event/CreateEvent';
import HomeScreen from '../home/Home';
import HomeViewNavigation from '../home/HomeViewNavigation';
import ViewEvent from '../view_event/ViewEvent';
import VendorListNavigation from '../view_vendor_list/VendorListNavigation';
// import ViewVendorList from '../view_vendor_list/ViewVendorList';
import ViewProfile from '../profile/ViewProfile';
import ViewProfileNavigation from '../profile/ViewProfileNavigation';
import MessagingView from '../messaging_client/MessagingView';
import VendorAdminPage from '../vendor_admin_page/VendorAdminPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                lazy: false,
                headerShown: false,
                swipeEnabled: true,
                tabBarScrollEnabled: true,
                tabBarItemStyle: { width: 150 },
                tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeViewNavigation}
                options={{
                    sceneContainerStyle: { overflow: 'visible' },
                    tabBarStyle: { overflow: 'visible' },
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    title: 'Home'
                }}>
            </Tab.Screen>
            <Tab.Screen
                name="Categories"
                component={VendorListNavigation}
                options={{ 
                    title: 'Categories',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={size} />
                    ), }}>
            </Tab.Screen>
            <Tab.Screen
                name="Profile"
                component={ViewProfileNavigation}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}>
            </Tab.Screen>
            {/* <Tab.Screen
                name="VendorAdminPage"
                component={VendorAdminPage}
                options={{ title: 'VendorAdminPage' }}>
            </Tab.Screen> */}
        </Tab.Navigator>
    )
}

export default BottomNavigation;