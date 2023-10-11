import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";

export default function Form({addClick}) {
    const [text, setValue] = useState('')
    
    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} />
            <Button onPress={()=> addClick(text)} title='add smth' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        padding: 10,
        width: '60%',
        marginVertical: '5%',
        marginHorizontal: '20%'
    }
})