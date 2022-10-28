import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const Buttons = (props) => {
    return(
        <View>
            <Pressable onPress={props.onClick}>
                <Text>{props.text}</Text>
            </Pressable>
        </View>
    )
    
}

export default Buttons;