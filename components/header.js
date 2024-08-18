import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
        <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 30,
        height: 80, 
        backgroundColor: '#63625c',
    },
    text: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 25
    }
});