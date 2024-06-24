import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Video } from "expo-av";

import GameButton from "../components/GameButton";

const imageBg = { uri: "https://aariv-react-native.s3.amazonaws.com/common/dark-blue-bg.png" };
const scoreImage = { uri: "https://aariv-react-native.s3.amazonaws.com/basketball-game/score-image" };
const streakImage = { uri: "https://aariv-react-native.s3.amazonaws.com/basketball-game/streak-image" };

const QuestionScreen = function ({ navigation }) {
    const navigateToAnswer = () => {
        array1.splice(randNum, 1);
        var rand2BPassed = randNum;
        setRandNum(Math.floor(Math.random() * array1.length));
        navigation.push("Answer", {
            randNum: rand2BPassed,
            correct: correct,
            score: global.score,
            streak: global.streak,
            array2: array2
        });
    };

    global.streak === undefined ? global.streak = 0 : null;
    global.score === undefined ? global.score = 0 : null;

    const [randNum, setRandNum] = useState(Math.floor(Math.random() * array1.length));
    const [visibility, setVisibility] = useState(0);

    var correct = undefined;

    if (array1.length <= 0) {
        for (var i = 0; i < originalArray1.length; i++) {
            array1.push(originalArray1[i]);
            array2.push(originalArray2[i]);
        }
    }

    return <View style={{ flex: 1 }}>
        <ImageBackground source={imageBg} style={{ flex: 1 }}>
            <View nativeID="Title" style={{ height: "15%"}}>
                <Text style={styles.title}>Take your best guess!</Text>
            </View>

            <View nativeID="Video" style={{ height: "45%"}}>
                <Video
                    source={{ uri: array1[randNum].substring(0, array1[randNum].indexOf("[ANSWER]")) }}
                    style={styles.videoStyle}
                    shouldPlay
                    onPlaybackStatusUpdate={(playbackStatus) => {
                        var duration = playbackStatus.durationMillis;
                        var position = playbackStatus.positionMillis;
                        if (duration == position && duration != undefined) {
                            setVisibility(1);
                        }
                    }}
                />
            </View>

            <View nativeID="Buttons" style={{ height: "30%", opacity: visibility }}>
                <GameButton title="IN" onTouch={() => {
                    if (array1[randNum].substring(array1[randNum].indexOf("[ANSWER]") + 8) == "IN") {
                        correct = true;
                        global.score++;
                        global.streak++;
                    }
                    else {
                        correct = false;
                        global.streak = 0;
                    }
                    navigateToAnswer();
                }} />
                <Text style={{ bottom: "1.5%" }}></Text>
                <GameButton title="OUT" onTouch={() => {
                    if (array1[randNum].substring(array1[randNum].indexOf("[ANSWER]") + 8) == "OUT") {
                        correct = true;
                        global.score++;
                        global.streak++;
                    }
                    else {
                        correct = false;
                        global.streak = 0;
                    }
                    navigateToAnswer();
                }} />
            </View>

            <View nativeID="Footer" style={styles.footerStyle}>
                <Text style={styles.streak}>{`Streak: ${global.streak}`}</Text>
                <Text style={styles.score}>{`Score: ${global.score}`}</Text>
                <Image source={scoreImage} style={styles.scoreImage}></Image>
                <Image source={streakImage} style={styles.streakImage}></Image>
            </View>
        </ImageBackground>
    </View>
};

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 30,
        alignSelf: "center",
        marginTop: hp("8.5%")
    },
    videoStyle: {
        height: hp("44.98%"),
        width: "96%",
        alignSelf: "center"
    },
    footerStyle: {
        backgroundColor: "#66CC00",
        height: "10%",
        justifyContent: "center"
    },
    scoreImage: {
        height: 60,
        width: 60,
        position: "absolute",
        marginLeft: "1%"
    },
    streakImage: {
        height: 50,
        width: 50,
        position: "absolute",
        right: "35%"
    },
    score: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        position: "absolute",
        marginLeft: "18.67%"
    },
    streak: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "flex-end",
        marginRight: "2.67%",
    }
});

const array1 = [
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/make-1.mp4[ANSWER]IN",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/orange-video-half.mp4[ANSWER]IN",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/blue-video-half.mp4[ANSWER]IN",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/yellow-video-half.mp4[ANSWER]IN",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/green-video-half.mp4[ANSWER]IN"
];

const array2 = [
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/make-2.mp4",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/orange-video-full.mp4",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/blue-video-full.mp4",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/yellow-video-full.mp4",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/green-video-full.mp4"
];

const originalArray1 = [
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/make-1.mp4[ANSWER]IN",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/orange-video-half.mp4[ANSWER]IN",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/blue-video-half.mp4[ANSWER]IN",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/yellow-video-half.mp4[ANSWER]IN",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/green-video-half.mp4[ANSWER]IN"
];

const originalArray2 = [
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/make-2.mp4",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/orange-video-full.mp4",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/blue-video-full.mp4",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/yellow-video-full.mp4",
    "https://aariv-react-native.s3.amazonaws.com/basketball-game/content/green-video-full.mp4"
];

export default QuestionScreen;