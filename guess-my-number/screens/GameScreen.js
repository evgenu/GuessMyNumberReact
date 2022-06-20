import { useEffect, useState } from "react";
import { View, StyleSheet, Alert, Flatlist, Text } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let lowestNumber = 1
let highestNumber = 100;
let guesses = [];

const GameScreen = ({ userNumber, onGameOver }) => {
  
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  
  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {

    guesses.push({value: currentGuess, id: Math.random().toString()});
    console.log(guesses[guesses.length - 1].id, guesses[guesses.length - 1].value);

    if((direction === 'lower' && currentGuess < userNumber) || 
      (direction === 'greater' && currentGuess > userNumber)) {
        Alert.alert('Do not lie!', 'You know that this is wrong...', [{ text: 'Sorry', style: 'cancel' }]);
        return;
    } 

    if(direction === 'lower') {
      highestNumber = currentGuess;
    } else {
      lowestNumber = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(lowestNumber, highestNumber, currentGuess);
    setCurrentGuess(newRandomNumber);

  }

  return (
    <View style={styles.screen}>
      <Title color={Colors.primary1000}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <View style={styles.buttonsContainer}>
          <PrimaryButton style={styles.buttonContainer} onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton style={styles.buttonContainer} onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
        </View>
      </View>
      <View>
        {/* <Flatlist 
          data={guesses}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={itemData => {
            return (
              <Text>{itemData.value}</Text>
            );
          }}
        /> */}
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1
  }
});