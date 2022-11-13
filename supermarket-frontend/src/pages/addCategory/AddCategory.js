import React, { useState } from 'react';
import { Image, Text, TextInput, View, ScrollView, Pressable } from "react-native";
import { colors } from "../../constants/palette";
import * as ImagePicker from 'expo-image-picker';
import Buttons from "../../components/Button/Buttons";
import styles from "./styles";
import { Formik } from 'formik';
import sendRequest from '../../utils/axios';
import baseUrl from '../../../config/env';

const AddCategory = () => {

    const [image, setImage] = useState(null);
    const [base64Image, setBase64Image] = useState();

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
        // console.log(base64Image)
        }
    };

    return <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Formik 
        initialValues={{
            category:'',
            image: '',
            id:''
        }}
        onSubmit={(values, actions)=> {
            values.image=base64Image
            values.id='636ef8497eb94fe486471d25'
            actions.resetForm();
            sendRequest({method:"post",data:values,route:`${baseUrl.BASE_URL}/category/add`})
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
                    <TextInput value={props.values.category} onChangeText={props.handleChange('category')} style={styles.input} placeholder={'Category'}/>
                    <View style={styles.buttonContainer}>
                        <Buttons text={'SAVE'} color={colors.primary} onClick={props.handleSubmit}/>
                    </View>
                </View>
            )}
        </Formik>
    </ScrollView>
}

export default AddCategory;