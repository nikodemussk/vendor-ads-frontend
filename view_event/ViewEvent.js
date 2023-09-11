import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { getEventList } from "./ViewEventClient";

const ViewEvent = ({ navigation }) => {

    const [data, setData] = useState([]);


    useEffect(() => {
        getEventList().then(data => setData(data));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <Text style={styles.bigTitle}>
                    View an Event
                </Text>
                <Button 
                    title={"Create an event"}
                    onPress={() => navigation.navigate('CreateEvent')} />

                {data != undefined && data.map(datum =>
                    <View>
                        <Text style={styles.eventTitle}>{datum.name}</Text>
                        <Text>{datum.location}</Text>
                        <Text>{new Date(datum.dateTime * 1000).toISOString()}</Text>
                    </View>)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    fieldContainer: {
        width: '70%'
    },
    input: {
        textAlign: 'center',
        backgroundColor: '#FFF',
        borderBottomWidth: '1px',
        borderColor: '#B5B4B0'
    },
    eventTitle: {
        color: '#B5B4B0',
        textAlign: 'left',
        alignItems: 'left',
        fontSize: '1rem',
        marginBottom: '0.7em'
    },
    inputContainer: {
        width: '100%',
        marginBottom: '2em'
    },
    bigTitle: {
        fontSize: '2em',
        fontWeight: '700',
        marginBottom: '1.5em'
    }
});

export default ViewEvent;