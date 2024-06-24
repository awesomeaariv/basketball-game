import React, {useState} from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

import { Video } from "expo-av";
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import GameButton from "../components/GameButton";

const imageBg = { uri: "https://aariv-react-native.s3.amazonaws.com/common/dark-blue-bg.png" };
const scoreImage = { uri: "https://aariv-react-native.s3.amazonaws.com/basketball-game/score-image" };
const streakImage = { uri: "https://aariv-react-native.s3.amazonaws.com/basketball-game/streak-image" };

const AnswerScreen = function (props) {
    const [visibility, setVisibility] = useState(0);
    const passed = props.navigation.state.params;

    return <View style={{ flex: 1 }}>
        <ImageBackground source={imageBg} style={{ flex: 1 }}>
            <View style={{ height: "15%"}}>
                {passed.correct === true ? <Text style={styles.correct}>Good job!</Text> : null}
                {passed.correct === false ? <Text style={styles.correct}>Sorry, that was incorrect.</Text> : null}
            </View>

            <View style={{ height: "45%"}}>
                <Video
                    source={{ uri: passed.array2[passed.randNum] }}
                    style={styles.videoStyle}
                    shouldPlay
                    onPlaybackStatusUpdate={(playbackStatus) => {
                        if (playbackStatus.durationMillis == playbackStatus.positionMillis && playbackStatus.durationMillis != undefined) {
                            setVisibility(1);
                        }
                    }}
                />
            </View>

            <View style={{ height: "30%", opacity: visibility }}>
                <GameButton title="NEXT VIDEO" onTouch={() => {
                    passed.array2.splice(passed.randNum, 1);
                    props.navigation.push("Question");
                }}/>
            </View>

            <View style={styles.footerStyle}>
                <Text style={styles.score}>{`Score: ${passed.score}`}</Text>
                <Text style={styles.streak}>{`Streak: ${passed.streak}`}</Text>
                <Image source={scoreImage} style={styles.scoreImage}></Image>
                <Image source={streakImage} style={styles.streakImage}></Image>
            </View>

        </ImageBackground>
    </View>
};

const styles = StyleSheet.create({
    correct: {
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
        fontWeight: "bold",
        fontSize: 25,
        bottom: 110,
        alignSelf: "flex-end",
        marginRight: 10
    },
    streak: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "flex-end",
        marginRight: "2.67%",
    }
});

export default AnswerScreen;