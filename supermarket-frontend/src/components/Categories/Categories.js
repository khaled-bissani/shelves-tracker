import { Text, View, Pressable, Image } from "react-native";
import styles from "./styles";
import baseUrl from "../../../config/env";

const Categories = (props) => {
    const image = `${baseUrl.BASE_URL}/static/images/${props.imageUrl}`
    return (
        <>
            <Pressable onPress={props.onClick} android_ripple={{color: '#ddd'}} style={({pressed}) => pressed && styles.pressedItem}>
                <View style={styles.categoryContainer}>
                    <View style={[styles.categoryBox, {width:props.width, height:props.height}]}>
                        <Image style={styles.imageContainer} source={{ uri:image}}/>
                    </View>
                    <Text style={styles.text}>{props.label}</Text>
                </View>
            </Pressable>
        </>
    )
}

export default Categories;