import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CreateEventView from './create_event/CreateEventView';
import ViewEvent from './view_event/ViewEvent';

export default function App() {
  return (
    <View style={styles.container}>
      <CreateEventView />
      {/* <ViewEvent /> */}
    </View>
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
