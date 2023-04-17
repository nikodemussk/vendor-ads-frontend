import { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';

const WebDateTimeForm: any = (props: any) => {

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [hour, setHour] = useState("");
    const [minutes, setMinutes] = useState("");

    const onValueChange = (value: string, limit: number, setMethod: React.Dispatch<React.SetStateAction<string>>) => {
        if ((parseInt(value) <= limit)) {
            setMethod(parseInt(value) + "")
        }
        else if (value === "")
            setMethod("")
    }

    const getTimeZone = () => {
        let timezone_offset_min = new Date().getTimezoneOffset()
        let offset_hrs = parseInt(Math.abs(timezone_offset_min / 60))
        let offset_min = Math.abs(timezone_offset_min % 60)

        if (offset_hrs < 10)
            offset_hrs = '0' + offset_hrs;

        if (offset_min < 10)
            offset_min = '0' + offset_min;

        // Add an opposite sign to the offset
        // If offset is 0, it means timezone is UTC
        if (timezone_offset_min < 0)
            return '+' + offset_hrs + ':' + offset_min;
        else if (timezone_offset_min > 0)
            return '-' + offset_hrs + ':' + offset_min;
        else if (timezone_offset_min == 0)
            return 'Z';
    }

    const onChange = () => {
        if (day !== "" && month != "" && year != "" && hour != "" && minutes != "") {
            props.onChange(year + "-" + month + "-" + day + "T" + hour + ":" + minutes + ":00" + getTimeZone())//yyy-MM-dd'T'HH:mm
        }
    }

    useEffect(() => { onChange() }, [day, month, year, month, hour, minutes])

    let styles;

    if (Platform.OS !== "android") {
        styles = StyleSheet.create({
            fieldContainer: {
                display: "flex",
                flexDirection: "row",
                maxWidth: "100%",
                marginBottom: '2em'
            },
            inputTitle: {
                color: '#B5B4B0',
                textAlign: 'left',
                alignItems: 'left',
                fontSize: '1rem',
                marginBottom: '0.7em'
            },
            inputBox: {
                maxWidth: '3em',
                textAlign: 'center',
                backgroundColor: '#FFF',
                borderBottomWidth: '1px',
                borderColor: '#B5B4B0'
            }
        })
    } else {
        styles = StyleSheet.create({
            fieldContainer: {
                display: "flex",
                flexDirection: "row",
                maxWidth: "100%",
                marginBottom: '2em'
            },
            inputTitle: {
                color: '#B5B4B0',
                textAlign: 'left',
                alignItems: 'flex-start',
                fontSize: 1,
                marginBottom: '0.7em'
            },
            inputBox: {
                maxWidth: '3em',
                textAlign: 'center',
                backgroundColor: '#FFF',
                borderBottomWidth: 1,
                borderColor: '#B5B4B0'
            }
        })
    }

    return (
        <View>
            <Text
                style={styles.inputTitle}>
                Date
            </Text>
            <View style={styles.fieldContainer}>
                <TextInput
                    onChangeText={value => onValueChange(value, 31, setDay)}
                    value={day}
                    placeholder={"DD"}
                    style={styles.inputBox}
                    placeholderTextColor="#B5B4B0"
                />
                <Text>/</Text>
                <TextInput
                    placeholder={"MM"}
                    value={month}
                    onChangeText={value => onValueChange(value, 12, setMonth)}
                    style={styles.inputBox}
                    placeholderTextColor="#B5B4B0"
                />
                <Text>/</Text>
                <TextInput
                    placeholder={"YYYY"}
                    value={year}
                    onChangeText={value => onValueChange(value, 2050, setYear)}
                    style={styles.inputBox}
                    placeholderTextColor="#B5B4B0"
                />
            </View>
            <Text
                style={styles.inputTitle}>
                Time
            </Text>
            <View style={styles.fieldContainer}>
                <TextInput
                    placeholder={"HH"}
                    value={hour}
                    onChangeText={value => onValueChange(value, 23, setHour)}
                    placeholderTextColor="#B5B4B0"
                    style={styles.inputBox}
                />
                <Text>:</Text>
                <TextInput
                    placeholder={"MM"}
                    value={minutes}
                    onChangeText={value => onValueChange(value, 59, setMinutes)}
                    placeholderTextColor="#B5B4B0"
                    style={styles.inputBox}
                />
            </View>
        </View>
    )
}

export default WebDateTimeForm;