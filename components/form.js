import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text, TextInput, Button } from 'react-native';

export default function Form({ addHandler }) {
  const [text, setValue] = useState('');

  const onChange = (text) => {
    setValue(text);
  };

  const handlePress = () => {
    addHandler(text);
    setValue(''); 
  };

  return (
    <View style={styles.view}>
        <TextInput style={styles.input} onChangeText={onChange} value={text} placeholder='Впишите задачу...'/>
        <Pressable style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Добавить</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
        height: 100,
        borderBottomColor: 'black',
        borderWidth: 0.5,
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        borderBottomWidth: 1,
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '7%',
        width: '50%'
    },
    button: {
        width: '*',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        elevation: 3,
        backgroundColor: 'white'
    },
    buttonText: {
        fontSize: 14,
        lineHeight: 15,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    }
});