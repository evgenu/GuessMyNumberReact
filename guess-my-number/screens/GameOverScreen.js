import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

const GameOverScreen = ({userNumber}) => {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.gameOverText}>Game Over!</Text>
            <Text style={styles.gameOverText}>Computer guessed {userNumber}.</Text>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: Colors.primary1000,
        paddingVertical: 100,
        marginBottom: '110%'
    },
    gameOverText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    }

});