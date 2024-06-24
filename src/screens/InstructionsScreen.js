import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

import GameButton from "./../components/GameButton";

const imageBg = { uri: "https://aariv-react-native.s3.amazonaws.com/blue-bg.png" };

const InstructionsScreen = function ({ navigation }) {
    const instructions = "A video of a basketball being shot will play. About halfway, you will be asked whether you think that the ball will go "
    + "in the hoop or not. If you get it correct, you earn a point.";

    return <View style={{ flex: 1 }}>
        <ImageBackground source={imageBg} style={{ flex: 1 }}>
            <View nativeID="TopMargin" style={{ height: "5%" }}></View>

            <View nativeID="Title" style={{ height: "15%", justifyContent: "center" }}>
                <Text style={styles.title}>HOW TO PLAY</Text>
            </View>

            <View nativeID="Instructions" style={{ height: "35%", justifyContent: "center" }}>
                <Text style={styles.regularText}>{instructions}</Text>
            </View>

            <View nativeID="BackButton" style={{ height: "40%", justifyContent: "center" }}>
                <GameButton title="BACK" onTouch={() => navigation.navigate("Home")} />
            </View>

        </ImageBackground>
    </View>
};

const styles = StyleSheet.create({
    title: {
        alignSelf: "center",
        fontSize: 30,
        fontWeight: "600",
        color: "white"
    },
    regularText: {
        fontSize: 20,
        marginHorizontal: "5.33%",
        alignSelf: "center",
        color: "white"
    }
})

export default InstructionsScreen;