import { Image, Text, TextInput, View } from "react-native";
import { colors } from "../../constants/palette";
import Buttons from "../../components/Button/Buttons";
import styles from "./styles";

const AddProduct = () => {
    return <View style={styles.pageContainer}>
    <View style={styles.imageContainer}>
        <Image style={styles.image} source={''}/>
    </View>
    <TextInput style={styles.input} placeholder={'Product Name'}/>
    <TextInput style={styles.input} placeholder={'Product Quantity '}/>
    <TextInput style={styles.input} placeholder={'Product Expiry Date'}/>
    <View style={styles.buttonContainer}>
        <Buttons text={'GENERATE BARCODE'} color={colors.primary}/>
        <Buttons text={'UPLOAD IMAGE'} color={colors.primary}/>
        <Buttons text={'SAVE'} color={colors.primary}/>
    </View>
</View>
}

export default AddProduct;