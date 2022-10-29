import { Pressable, Text } from "react-native";
import styles from "./styles";

const PressableText = (props) => {
    return(
        <Pressable onPress={props.onClick} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={{color:props.textColor, fontSize:props.fontSize}}>{props.text}</Text>
        </Pressable>
    )
}

export default PressableText;