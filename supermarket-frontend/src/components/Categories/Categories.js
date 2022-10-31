import { Text, View, Pressable } from "react-native";
import styles from "./styles";

const Categories = (props) => {
    return (
        <>
            <Pressable android_ripple={{color: '#ddd'}} style={({pressed}) => pressed && styles.pressedItem}>
                <View style={styles.categoryContainer}>
                    <View style={styles.categoryBox}></View>
                    <Text style={styles.text}>{props.label}</Text>
                </View>
            </Pressable>
        </>
    )
}

export default Categories;