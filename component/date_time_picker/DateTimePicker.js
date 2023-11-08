import RNDateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import { Platform, StyleSheet, TextInput } from 'react-native';
import WebDateTimeForm from "./WebDateTimeForm";

const DateTimePicker = Platform.select({
    android: (props) => {
        return (
            <RNDateTimePicker
                testID="dateTimePicker"
                value={new Date()}
                mode={"date"}
                is24Hour={true}
                onChange={props.onChange}
                timeZoneName={'Asia/Jakarta'}
            />
        );
    },
    native: (props) => {
        return (
            <RNDateTimePicker
                testID="dateTimePicker"
                value={new Date()}
                mode={"date"}
                is24Hour={true}
                onChange={props.onChange}
                timeZoneName={'Asia/Jakarta'}
            />
        );
    },
    default: (props) =>
        <WebDateTimeForm
            onChange={props.onChange} 
        />
});

export default DateTimePicker;