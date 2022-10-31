import { Text, View } from "react-native";
import styles from "./styles";

const Categories = () => {
    return <>
            <View style={styles.categoryContainer}>
                <View style={styles.categoryBox}></View>
                <Text style={styles.text}>Fruits</Text>
            </View>
        </>
}

export default Categories;