import React from "react";
import { Platform, StyleSheet, TextInput } from 'react-native';
import WebDateTimeForm from "./WebDateTimeForm";

const DateTimePicker = Platform.select({
    native: (props) => {
        return (
            <RNDateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={props.onChange}
            />
        );
    },
    default: (props) =>
        <WebDateTimeForm
            onChange={props.onChange} 
        />
});

export default DateTimePicker;