import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children, color }) => {
    return (
        <Text style={[styles.title, {color: color, borderColor: color,}]}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 2,
        padding: 12
      }
});