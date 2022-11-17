import React, { useState, useEffect } from 'react';
import { Text, View, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import ProfileOption from "../../components/ProfileOption/ProfileOption";
import styles from "./styles";
import sendRequest from '../../utils/axios';
import baseUrl from '../../../config/env';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {

    const navigation = useNavigation();

    const [base64Image, setBase64Image] = useState("");
    const [profile, setProfile] = useState()
    const [userId, setUserId] = useState("");

    AsyncStorage.getItem('userId').then((value)=> setUserId(value));

    const values={
        id: userId,
        picture: base64Image
    }

    const profilePicture = `http://172.20.10.2:3000/static/images/${profile}`

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true
        });

        if (!result.cancelled) {
        setBase64Image(result.base64);        
        }
    };

    useEffect(() => {
        const fetchData = async() => {
            try {
                await sendRequest({method:"post",data:values.id,route:`${baseUrl.BASE_URL}/profile/view_picture`})
                .then((res)=>{
                setProfile(res.picture)})
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    

    useEffect(() => {
        const fetchData = async() => {
            try {
                await sendRequest({method:"post",data:values,route:`${baseUrl.BASE_URL}/profile/picture`})
                .then((res)=>{
                console.log(res)})
            } catch (error) {
                console.log(error)
            }
        }
        if(userId.length>0 && base64Image.length>0){
            fetchData()
        }
    }, [userId,base64Image])
    
    return <View>
        <View style={styles.container}>
            <View style={styles.profilePictureContainer}>
                <Image style={styles.profilePicture} source={{uri : profilePicture}}/>
            </View>
            <Text style={styles.profileName}>Supermarket</Text>
            <View style={styles.profileLine}></View>
        </View>
        <View style={styles.profileOptionContainer}>
            <ProfileOption onClick={()=>navigation.navigate('EditProfile',{profilePicture:profilePicture})} icon={"create-outline"} text={"Edit profile"}/>
            <ProfileOption onClick={pickImage} icon={"person-circle-outline"} text={"Change profile picture"}/>
            <ProfileOption onClick={()=>navigation.navigate('ChangePassword')} icon={"lock-closed-sharp"} text={"Change password"}/>
        </View>
    </View>
}

export default Profile;