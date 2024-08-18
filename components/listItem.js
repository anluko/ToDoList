import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ListItem({ el, deleteHandler }) {
  const [isChecked, setChecked] = useState(false);
  
  return (
    <TouchableOpacity  onPress={() => deleteHandler(el.key)}>
        <View style={styles.container}>
            <Text style={styles.text}>{ el.text }</Text>
        </View>
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        textAlign: 'left',
        textAlignVertical: 'center',
        borderRadius: 5, 
        backgroundColor: "#fafafa",
        borderWidth: 1,
        marginTop: 10,
        marginLeft: '5%',
        marginRight: '5%',
    },
    text: {
        fontSize: 16,
        fontStyle: 'italic'
    }
});