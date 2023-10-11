import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>
                Список дел
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        height: 100,
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    }
})