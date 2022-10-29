import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles";

const GoogleButton = (props) => {
    return(
        <View style={styles.buttonContainer}>
            <Pressable onPress={props.onClick} android_ripple={{color: '#ddd'}} style={({pressed}) => pressed && styles.pressedItem}>
                <View style={styles.insideContainer}>
                    <Image style={styles.imageContainer} source={require('../../../assets/images/google.png')}/> 
                    <Text style={styles.text}>{props.text}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default GoogleButton;