import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const GameButton = function ({ title, onTouch }) {
    return <View>
        <Text style={styles.blankText}></Text>
        <Text style={styles.buttonText}>{`${title}`}</Text>
        <TouchableOpacity style={styles.button} onPress={onTouch}/>
    </View>
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 175,
        alignSelf: "center",
        position: "absolute",
        bottom: 20
    },
    blankText: {
        height: 50,
        width: 240,
        backgroundColor: "rgb(255,175,0)",
        alignSelf: "center",
        borderRadius: 10,
        overflow: "hidden"
    },
    buttonText: {
        color: "blue",
        alignSelf: "center",
        fontSize: 25,
        fontWeight: "900",
        bottom: 39
    }
});

export default GameButton;