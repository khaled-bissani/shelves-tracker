import { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { colors } from "../../constants/palette";
import Buttons from "../../components/Button/Buttons";
import styles from "./styles";
import Barcode from "../../components/Barcode/Barcode";

const AddProduct = () => {

    let RandomNumber = Math.floor(Math.random() * 10000000) + 1 ;

    const [number, setNumber]=useState();
    const [barcode, setBarcode] = useState(false);

    const showBarcode = () => {
        setBarcode(true);
        setNumber(RandomNumber);
    }

    return <View style={styles.pageContainer}>
    <View style={styles.imageContainer}>
        <Image style={styles.image} source={''}/>
    </View>
    <TextInput style={styles.input} placeholder={'Product Name'}/>
    <TextInput style={styles.input} placeholder={'Product Quantity '}/>
    <TextInput style={styles.input} placeholder={'Product Expiry Date'}/>
    {barcode ? <Barcode number={number}/> : null}
    <View style={styles.buttonContainer}>
        <Buttons text={'GENERATE BARCODE'} color={colors.primary} onClick={showBarcode}/>
        <Buttons text={'UPLOAD IMAGE'} color={colors.primary}/>
        <Buttons text={'SAVE'} color={colors.primary}/>
    </View>
</View>
}

export default AddProduct;