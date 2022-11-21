import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";
import baseUrl from "../../../config/env";

const SingleItem = (props) => {

    const image = `${baseUrl.BASE_URL}/static/images/${props.imageUrl}`

    return <>
        <Pressable onPress={props.onClick} android_ripple={{color: '#ddd'}} style={({pressed}) => pressed && styles.pressedItem}>
            <View style={styles.singleItemContainer}>
                <View style={[styles.singleItemBox, {width:props.width, height:props.height}]}>
                    <Image source={{ uri:image}} style={styles.imageContainer}/>
                </View>
                <Text style={styles.text}>{props.label}</Text>
                <Text style={styles.quantity}>{props.quantity}</Text>
            </View>
        </Pressable>
    </>
}

export default SingleItem;