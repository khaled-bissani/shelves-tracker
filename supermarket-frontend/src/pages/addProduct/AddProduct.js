import { useState } from "react";
import { Image, Text, TextInput, View, Pressable, ScrollView } from "react-native";
import { colors } from "../../constants/palette";
import * as ImagePicker from 'expo-image-picker';
import Buttons from "../../components/Button/Buttons";
import styles from "./styles";
import Barcode from "../../components/Barcode/Barcode";

const AddProduct = () => {

    let RandomNumber = Math.floor(Math.random() * 10000000) + 1 ;

    const [number, setNumber]=useState();
    const [barcode, setBarcode] = useState(false);
    const [image, setImage] = useState(null);
    const [base64Image, setBase64Image] = useState();

    const showBarcode = () => {
        setBarcode(true);
        setNumber(RandomNumber);
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
        base64: true
        });

        if (!result.cancelled) {
        setImage(result.uri);
        setBase64Image(result.base64);
        }
    }

    return <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.pageContainer}>
            <View style={styles.imageContainer}>
                <Pressable onPress={pickImage}>
                    <Image style={styles.image} source={{uri: image}}/>
                </Pressable>
            </View>
            <TextInput style={styles.input} placeholder={'Product Name'}/>
            <TextInput style={styles.input} placeholder={'Product Quantity '}/>
            <TextInput style={styles.input} placeholder={'Product Category'}/>
            <TextInput style={styles.input} placeholder={'Product Expiry Date'}/>
            {barcode ? <Barcode number={number}/> : null}
            <View style={styles.buttonContainer}>
                <Buttons text={'GENERATE BARCODE'} color={colors.primary} onClick={showBarcode}/>
                <Buttons text={'SAVE'} color={colors.primary}/>
            </View>
        </View>
    </ScrollView>
}

export default AddProduct;