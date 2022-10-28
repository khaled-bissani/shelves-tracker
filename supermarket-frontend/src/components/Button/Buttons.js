import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const Buttons = (props) => {
    return(
        <View style={[styles.buttonContainer ,{backgroundColor:`${props.color}`}]}>
            <Pressable onPress={props.onClick} android_ripple={{color: '#ddd'}} style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.text}>{props.text}</Text>
            </Pressable>
        </View>
    )
    
}

export default Buttons;