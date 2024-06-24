import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import InstructionsScreen from './src/screens/InstructionsScreen';
import CreditsScreen from './src/screens/CreditsScreen';
import QuestionScreen from './src/screens/QuestionScreen';
import AnswerScreen from './src/screens/AnswerScreen';

const navigator = createStackNavigator({
    Home: HomeScreen,
    Question: QuestionScreen,
    Instructions: InstructionsScreen,
    Credits: CreditsScreen,
    Answer: AnswerScreen
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerShown: false,
        cardStyle: {
            backgroundColor: "#008080"
        }
    }
});

export default createAppContainer(navigator);