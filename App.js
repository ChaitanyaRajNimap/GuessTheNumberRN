import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(); //To store user entered number
  const [gameIsOver, setGameIsOver] = useState(true); //to store game over state
  const [guessRounds, setGuessRounds] = useState(0); //to store round num

  //to use custom fonts
  // const [fontsLoaded] = useFonts({
  //   "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  //   "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  //Helper fun which is passed as prop for storing picked num
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false); //when game start makes gameover false
  }

  //To change gameover state when game is over
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  //to handle new game start
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  //To decide which screen to display
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  //render if game is over and user num is falsy
  if (gameIsOver && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    //To apply linear gradient
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
