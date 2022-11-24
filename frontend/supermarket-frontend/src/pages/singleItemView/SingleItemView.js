import { Ionicons } from "@expo/vector-icons";
import { Text, View, Image } from "react-native";
import Barcode from "../../components/Barcode/Barcode";
import { colors } from "../../constants/palette";
import styles from "./styles";
import baseUrl from "../../../config/env";

const SingleItemView = ({route}) => {

    const productId = route.params.productId
    const productName = route.params.productName
    const productQuantity = route.params.productQuantity
    const productImage = route.params.productImage
    const productExpiryDate = route.params.productExpiryDate
    const barcode = route.params.barcode

    const image = `${baseUrl.BASE_URL}/static/images/${productImage}`

    return <View style={styles.singleItemViewContainer}>
        <View style={styles.topContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: image}}/>
            </View>
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{productName}</Text>
                <Ionicons name="create-outline" color={colors.primary} size={36}/>
            </View>
            <View style={styles.elementContainer}>
                <View style={styles.boxContainer}>
                    <Text style={styles.textElement}>Quantity on shelves</Text>
                    <Text style={styles.value}>{productQuantity}</Text>
                </View>
                <View style={styles.boxContainer}>
                    <Text style={styles.textElement}>Expiry Date</Text>
                    <Text style={styles.value}>{productExpiryDate}</Text>
                </View>
                <View style={styles.boxContainer}>
                    <Text style={styles.textElement}>Bar Code</Text>
                    <View>
                        <Barcode number={barcode}/>
                    </View>
                </View>
            </View>
        </View>
    </View>
}

export default SingleItemView;