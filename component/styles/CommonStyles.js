import { Button, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { andoridStyles } from './AndroidStyles';
import { webStyles } from './WebStyles';

let styles;

switch (Platform.OS) {
    case "web": styles = webStyles; break;
    case "android": styles = andoridStyles; break;
    default: styles = webStyles; break;
}

// if (Platform.OS !== "android") {
//     styles = webStyles
// } else {
//     styles = andoridStyles
// }

export { styles };