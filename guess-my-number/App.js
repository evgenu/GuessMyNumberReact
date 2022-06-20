import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  } 

  const gameOverHandler = () => {
    setGameOver(true);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if(gameOver) {
    screen = <GameOverScreen />
  }


  return (
    <LinearGradient colors={[Colors.accent500, Colors.primary1000]} style={styles.rootScreen}>
     <SafeAreaView style={styles.rootScreen}>
      {screen}
     </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  }
});
