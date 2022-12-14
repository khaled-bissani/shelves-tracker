import React, { useState } from 'react';
import { Image, Text, View, ScrollView, Pressable, Alert } from "react-native";
import { colors } from "../../constants/palette";
import * as ImagePicker from 'expo-image-picker';
import Buttons from "../../components/Button/Buttons";
import styles from "./styles";
import { Formik } from 'formik';
import * as yup from "yup";
import sendRequest from '../../utils/axios';
import baseUrl from '../../../config/env';
import AddInputField from '../../components/AddInputField/AddInputField';
import AsyncStorage from "@react-native-async-storage/async-storage";

const categorySchema = yup.object({
    category: yup.string().required("Category is required")
})

const AddCategory = () => {

    const [image, setImage] = useState(null);
    const [base64Image, setBase64Image] = useState();
    const [userId, setUserId] = useState("");

    AsyncStorage.getItem('userId').then((value)=> setUserId(value));

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
    };

    return <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Formik 
        initialValues={{
            category:'',
            image: '',
            id:''
        }}
        validationSchema={categorySchema}
        onSubmit={(values, actions)=> {
            values.image=base64Image
            values.id=userId
            sendRequest({method:"post",data:values,route:`${baseUrl.BASE_URL}/category/add`})
            .then((res)=>{
                console.log(res)
                actions.resetForm();
                setImage(null)
                Alert.alert("Confirm","Category added sucessfully")
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
                        <AddInputField value={props.values.category} onChange={props.handleChange('category')} placeholder={'Category'} onBlur={props.handleBlur('category')}/>
                        <Text style={styles.errorText}>{props.touched.category && props.errors.category}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Buttons text={'SAVE'} color={colors.primary} onClick={props.handleSubmit}/>
                    </View>
                </View>
            )}
        </Formik>
    </ScrollView>
}

export default AddCategory;