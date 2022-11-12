import React, { useState } from 'react';
import { Image, Text, TextInput, View } from "react-native";
import { colors } from "../../constants/palette";
import * as ImagePicker from 'expo-image-picker';
import Buttons from "../../components/Button/Buttons";
import styles from "./styles";

const AddCategory = () => {

    const [image, setImage] = useState(null);

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
        }
    };

    return <View style={styles.pageContainer}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: image}}/>
        </View>
        <TextInput style={styles.input} placeholder={'Category'}/>
        <View style={styles.buttonContainer}>
            <Buttons text={'UPLOAD IMAGE'} color={colors.primary} onClick={pickImage}/>
            <Buttons text={'SAVE'} color={colors.primary}/>
        </View>
    </View>
}

export default AddCategory;