import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function List({ el, delelteString }) {
    return (
        <TouchableOpacity onpress={() => delelteString(el.key)}>
            <Text style={styles.text}>
                {el.text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 20,
        width: '60%',
        marginLeft: '20%'
    }
})