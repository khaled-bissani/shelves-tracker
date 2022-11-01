import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";

const SingleItem = (props) => {
    return <>
        <Pressable onPress={props.onClick} android_ripple={{color: '#ddd'}} style={({pressed}) => pressed && styles.pressedItem}>
            <View style={styles.singleItemContainer}>
                <View style={styles.singleItemBox}>
                    <Image source={props.imageURL} style={styles.imageContainer}/>
                </View>
                <Text style={styles.text}>{props.label}</Text>
                <Text style={styles.quantity}>{props.quantity}</Text>
            </View>
        </Pressable>
    </>
}

export default SingleItem;