import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

import GameButton from './../components/GameButton';

const imageBg = { uri: "https://aariv-react-native.s3.amazonaws.com/blue-bg.png" };

const CreditsScreen = function ({ navigation }) {
    const credits = "Idea - my dad\n\n Game Development - me\n\n Videos - my whole family\n\n Encouragement and Support - my whole family";
    
    return <View style={{ flex: 1 }}>
        <ImageBackground source={imageBg} style={{ flex: 1 }}>
            <View nativeID="TopMargin" style={{ height: "5%" }}></View>

            <View nativeID="Title" style={{ height: "15%", justifyContent: "center" }}>
                <Text style={styles.title}>CREDITS</Text>
            </View>

            <View nativeID="Credits" style={{ height: "40%" }}>
                <Text style={styles.regularText}>{credits}</Text>
            </View>

            <View nativeID="BackButton">
                <GameButton title="BACK" onTouch={() => navigation.navigate("Home")} />
            </View>
            
        </ImageBackground>
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "600",
        color: "white",
        alignSelf: "center"
    },
    regularText: {
        fontSize: 20,
        marginHorizontal: "5.33%",
        alignSelf: "center",
        color: "white"
    }
})

export default CreditsScreen;