import { Ionicons } from "@expo/vector-icons";
import { Text, View, Image } from "react-native";
import { colors } from "../../constants/palette";
import styles from "./styles";

const SingleItemView = () => {
    return <View style={styles.singleItemViewContainer}>
        <View style={styles.topContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../assets/images/landing.png')}/>
            </View>
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Item Name</Text>
                <Ionicons name="create-outline" color={colors.primary} size={36}/>
            </View>
        </View>
    </View>
}

export default SingleItemView;