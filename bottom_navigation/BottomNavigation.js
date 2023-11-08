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
                    sceneContainerStyle: {overflow: 'visible'},
                    tabBarStyle: {overflow: 'visible'},
                    title: 'Home' }}>
            </Tab.Screen>
            <Tab.Screen
                name="Vendors"
                component={VendorListNavigation}
                options={{ title: 'Vendors' }}>
            </Tab.Screen>
            <Tab.Screen
                name="Profile"
                component={ViewProfileNavigation}
                options={{ title: 'Profile' }}>
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