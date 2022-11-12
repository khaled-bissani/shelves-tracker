import React, { useState } from 'react';
import { Image, Text, TextInput, View, ScrollView, Pressable } from "react-native";
import { colors } from "../../constants/palette";
import * as ImagePicker from 'expo-image-picker';
import Buttons from "../../components/Button/Buttons";
import styles from "./styles";
import { Formik } from 'formik';

const AddCategory = () => {

    const [image, setImage] = useState(null);
    const [base64Image, setBase64Image] = useState();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
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
            image: ''
        }}
        onSubmit={(values, actions)=> {
            values.image=base64Image
            console.log(values)
            
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