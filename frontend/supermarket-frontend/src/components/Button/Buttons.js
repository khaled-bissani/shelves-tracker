import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const Buttons = (props) => {
    return(
        <View style={[styles.buttonContainer ,{backgroundColor:`${props.color}`}]}>
            <Pressable onPress={props.onClick} android_ripple={{color: '#ddd'}} style={({pressed}) => pressed && styles.pressedItem}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.text}</Text>
                </View>
            </Pressable>
        </View>
    )
    
}

export default Buttons;