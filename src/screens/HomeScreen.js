import React from "react";
import {StyleSheet, View, ImageBackground, Image } from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import GameButton from './../components/GameButton';

const imageBg = { uri: "https://aariv-react-native.s3.amazonaws.com/common/dark-blue-bg.png" };
const image = { uri: "https://aariv-react-native.s3.amazonaws.com/basketball-game/hero-image.png" };

const HomeScreen = function ({ navigation }) {
    return <View style={{ flex: 1 }}>
        <ImageBackground source={imageBg} style={{ flex: 1 }}>
            <View nativeID="TopMargin" style={{ height: hp("5%") }}></View>

            <View nativeID="HeroImage" style={styles.heroImageView}>
                <Image source={image} style={styles.heroImage}/>
            </View>

            <View nativeID="Buttons" style={styles.buttonsView}>
                <GameButton title="PLAY" onTouch={() => navigation.navigate("Question")} />
                <GameButton title="INSTRUCTIONS" onTouch={() => navigation.navigate("Instructions")} />
                <GameButton title="CREDITS" onTouch={() => navigation.navigate("Credits")} />
            </View>
        </ImageBackground>
    </View>
};

const styles = StyleSheet.create({
    heroImageView: {
        height: hp("45%"),
        width: wp("80%"),
        alignSelf: "center",
        justifyContent: "center"
    },
    buttonsView: {
        height: hp("50%"),
        justifyContent: "center"
    },
    heroImage: {
        height: "100%",
        width: "100%"
    }
});

export default HomeScreen;