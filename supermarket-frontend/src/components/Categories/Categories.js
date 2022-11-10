import { Text, View, Pressable, Image } from "react-native";
import styles from "./styles";

const Categories = (props) => {
    return (
        <>
            <Pressable onPress={props.onClick} android_ripple={{color: '#ddd'}} style={({pressed}) => pressed && styles.pressedItem}>
                <View style={styles.categoryContainer}>
                    <View style={[styles.categoryBox, {width:props.width, height:props.height}]}>
                        <Image source={props.imageURL} style={styles.imageContainer}/>
                    </View>
                    <Text style={styles.text}>{props.label}</Text>
                </View>
            </Pressable>
        </>
    )
}

export default Categories;