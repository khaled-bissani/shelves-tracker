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
            <View style={styles.elementContainer}>
                <View style={styles.boxContainer}>
                    <Text style={styles.textElement}>Quantity on shelves</Text>
                    <Text style={styles.value}>Number</Text>
                </View>
                <View style={styles.boxContainer}>
                    <Text style={styles.textElement}>Expiry Date</Text>
                    <Text style={styles.value}>Number</Text>
                </View>
                <View style={styles.boxContainer}>
                    <Text style={styles.textElement}>Bar Code</Text>
                    <View style={styles.barCodeContainer}>
                        <Image style={styles.image} source={''}/>
                    </View>
                </View>
            </View>
        </View>
    </View>
}

export default SingleItemView;