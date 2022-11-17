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

    const [profile, setProfile] = useState({
        full_name:'',
        email:'',
        phone_number:'',
        location:''
    })
    const [userId, setUserId] = useState("");

    AsyncStorage.getItem('userId').then((value)=> setUserId(value));

    useEffect(() => {
        const fetchData = async() => {
            try {
                await sendRequest({method:"post",data:userId,route:`${baseUrl.BASE_URL}/profile/view`})
                .then((res)=>{
                console.log(res)
                setProfile({
                    full_name : res.full_name,
                    email : res.email,
                    phone_number : res.phone_number,
                })
                })
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
            <InputField type={"default"} placeholder={"Full Name"} value={profile.full_name}/>
            <InputField type={"email-address"} placeholder={"Email"} value={profile.email}/>
            <InputField type={"number-pad"} placeholder={"Phone Number"} value={profile.phone_number}/>
            <InputField type={"default"} placeholder={"Location"} />
        </View>
        <Buttons text={'SAVE'} color={colors.primary}/>
    </View>
}

export default EditProfile;