import { useState } from "react";
import { Image, Text, TextInput, View, Pressable, ScrollView } from "react-native";
import { colors } from "../../constants/palette";
import * as ImagePicker from 'expo-image-picker';
import Buttons from "../../components/Button/Buttons";
import styles from "./styles";
import Barcode from "../../components/Barcode/Barcode";
import { Formik } from 'formik';
import * as yup from "yup";
import AddInputField from "../../components/AddInputField/AddInputField";
import sendRequest from "../../utils/axios";
import baseUrl from "../../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const productSchema = yup.object({
    product_name:yup.string().required("Product Name is required"),
    quantity_shelf:yup.string().required("Product Quantity is required"),
    expiry_date:yup.string().required("Product Expiry Date is required"),
    category: yup.string().required("Category is required")
})

const AddProduct = () => {

    let RandomNumber = Math.floor(Math.random() * 10000000) + 1 ;

    const [number, setNumber]=useState();
    const [barcode, setBarcode] = useState(false);
    const [image, setImage] = useState(null);
    const [base64Image, setBase64Image] = useState();
    const [userId, setUserId] = useState("");

    AsyncStorage.getItem('userId').then((value)=> setUserId(value));

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
        validationSchema={productSchema}
        onSubmit={(values, actions) => {
            values.image=base64Image
            values.id=userId
            values.barcode=barcode
            actions.resetForm();
            sendRequest({method:"post",data:values,route:`${baseUrl.BASE_URL}/product/add`})
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err.response.data)
            })
        }}
        >
            {(props) => (
                <View style={styles.pageContainer}>
                <View style={styles.imageContainer}>
                    <Pressable onPress={pickImage}>
                        <Image style={styles.image} source={{uri: image}}/>
                    </Pressable>
                </View>
                <View style={styles.inputContainer}>
                    <AddInputField value={props.values.product_name} onChange={props.handleChange('product_name')} placeholder={'Product Name'} onBlur={props.handleBlur('product_name')}/>
                    <Text style={styles.errorText}>{props.touched.product_name && props.errors.product_name}</Text>

                    <AddInputField value={props.values.quantity_shelf} onChange={props.handleChange('quantity_shelf')} placeholder={'Product Quantity'} onBlur={props.handleBlur('quantity_shelf')}/>
                    <Text style={styles.errorText}>{props.touched.quantity_shelf && props.errors.quantity_shelf}</Text>

                    <AddInputField value={props.values.category} onChange={props.handleChange('category')} placeholder={'Product Category'} onBlur={props.handleBlur('category')}/>
                    <Text style={styles.errorText}>{props.touched.category && props.errors.category}</Text>

                    <AddInputField value={props.values.expiry_date} onChange={props.handleChange('expiry_date')} placeholder={'Product Expiry Date'} onBlur={props.handleBlur('expiry_date')}/>
                    <Text style={styles.errorText}>{props.touched.expiry_date && props.errors.expiry_date}</Text>
                </View>
                {barcode ? <Barcode number={number}/> : null}
                <View style={styles.buttonContainer}>
                    <Buttons text={'GENERATE BARCODE'} color={colors.primary} onClick={showBarcode}/>
                    <Buttons text={'SAVE'} color={colors.primary} onClick={props.handleSubmit}/>
                </View>
            </View>
            )}
        </Formik>
    </ScrollView>
}

export default AddProduct;