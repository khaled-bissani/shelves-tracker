import React, { useState, useEffect } from 'react';
import { View, Image } from "react-native";
import { colors } from "../../constants/palette";
import Buttons from "../../components/Button/Buttons";
import InputField from "../../components/InputField/InputField";
import styles from "./styles";
import sendRequest from '../../utils/axios';
import baseUrl from '../../../config/env';
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditProfile = ({navigation,route}) => {

    const profilePicture=route.params.profilePicture

    const [profile, setProfile] = useState({
        id:userId,
        full_name:'',
        email:'',
        phone_number:'',
        location:''
    })
    const [userId, setUserId] = useState("");

    AsyncStorage.getItem('userId').then((value)=> setUserId(value));

    const handleChange=(valueIdentifier,input)=> {
        setProfile((currentValue)=>{
            return {
                ...currentValue,
                [valueIdentifier]:input
            };
        });
    }

    const editProfile = () => {
        sendRequest({method:"put",data:profile,route:`${baseUrl.BASE_URL}/profile/edit`})
        .then((res)=>{
            console.log(res)
            navigation.navigate('Profile')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(() => {
        const fetchData = async() => {
            try {
                await sendRequest({method:"post",data:{id:userId},route:`${baseUrl.BASE_URL}/profile/view`})
                .then((res)=>{
                console.log(res)
                setProfile({
                    full_name : res.full_name,
                    email : res.email,
                    phone_number : res.phone_number,
                    location: res.location
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
            <InputField type={"default"} placeholder={"Full Name"} value={profile.full_name} onChange={handleChange.bind(this, 'full_name')}/>
            <InputField type={"email-address"} placeholder={"Email"} value={profile.email} onChange={handleChange.bind(this, 'email')}/>
            <InputField type={"number-pad"} placeholder={"Phone Number"} value={profile.phone_number} onChange={handleChange.bind(this, 'phone_number')}/>
            <InputField type={"default"} placeholder={"Location"} value={profile.location} onChange={handleChange.bind(this, 'location')}/>
        </View>
        <Buttons text={'SAVE'} color={colors.primary} onClick={editProfile}/>
    </View>
}

export default EditProfile;