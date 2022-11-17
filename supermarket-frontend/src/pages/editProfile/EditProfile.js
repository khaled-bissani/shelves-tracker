import React, { useState, useEffect } from 'react';
import { View, Image } from "react-native";
import { colors } from "../../constants/palette";
import Buttons from "../../components/Button/Buttons";
import InputField from "../../components/InputField/InputField";
import styles from "./styles";
import sendRequest from '../../utils/axios';
import baseUrl from '../../../config/env';
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditProfile = ({route}) => {

    const profilePicture=route.params.profilePicture

    const [userId, setUserId] = useState("");

    AsyncStorage.getItem('userId').then((value)=> setUserId(value));

    useEffect(() => {
        const fetchData = async() => {
            try {
                await sendRequest({method:"post",data:userId,route:`${baseUrl.BASE_URL}/profile/view`})
                .then((res)=>{
                console.log(res)})
            } catch (error) {
                console.log(error)
            }
        }
        if(userId.length>0){
            fetchData()
        }
    }, [userId])
    
    return <View style={styles.editProfileContainer}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri : profilePicture}}/>
        </View>
        <View style={styles.inputs}>
            <InputField type={"default"} placeholder={"Full Name"}/>
            <InputField type={"default"} placeholder={"Username"}/>
            <InputField type={"email-address"} placeholder={"Email"}/>
            <InputField type={"number-pad"} placeholder={"Phone Number"}/>
        </View>
        <Buttons text={'SAVE'} color={colors.primary}/>
    </View>
}

export default EditProfile;