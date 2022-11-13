import { useState } from "react";
import { Image, Text, TextInput, View, Pressable, ScrollView } from "react-native";
import { colors } from "../../constants/palette";
import * as ImagePicker from 'expo-image-picker';
import Buttons from "../../components/Button/Buttons";
import styles from "./styles";
import Barcode from "../../components/Barcode/Barcode";
import { Formik } from 'formik';
import AddInputField from "../../components/AddInputField/AddInputField";

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
        <Formik
        initialValues={{
            product_name:'',
            quantity_shelf:'',
            expiry_date:'',
            category: '',
            barcode: '',
            image: '',
            id:''
        }}
        >
            {(props) => (
                <View style={styles.pageContainer}>
                <View style={styles.imageContainer}>
                    <Pressable onPress={pickImage}>
                        <Image style={styles.image} source={{uri: image}}/>
                    </Pressable>
                </View>
                <View>
                    <AddInputField value={props.values.product_name} onChange={props.handleChange('product_name')} placeholder={'Product Name'} onBlur={props.handleBlur('product_name')}/>

                    <AddInputField value={props.values.quantity_shelf} onChange={props.handleChange('quantity_shelf')} placeholder={'Product Quantity'} onBlur={props.handleBlur('quantity_shelf')}/>

                    <AddInputField value={props.values.category} onChange={props.handleChange('category')} placeholder={'Product Category'} onBlur={props.handleBlur('category')}/>

                    <AddInputField value={props.values.expiry_date} onChange={props.handleChange('expiry_date')} placeholder={'Product Expiry Date'} onBlur={props.handleBlur('expiry_date')}/>
                </View>
                {barcode ? <Barcode number={number}/> : null}
                <View style={styles.buttonContainer}>
                    <Buttons text={'GENERATE BARCODE'} color={colors.primary} onClick={showBarcode}/>
                    <Buttons text={'SAVE'} color={colors.primary}/>
                </View>
            </View>
            )}
        </Formik>
    </ScrollView>
}

export default AddProduct;