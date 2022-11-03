import React, { useState } from 'react';
import { Text, View, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import ProfileOption from "../../components/ProfileOption/ProfileOption";
import styles from "./styles";

const Profile = () => {

    const navigation = useNavigation();

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
        setImage(result.base64);
        }
    };
    
    return <View>
        <View style={styles.container}>
            <View style={styles.profilePictureContainer}>
                <Image style={styles.profilePicture} source={''}/>
            </View>
            <Text style={styles.profileName}>Supermarket</Text>
            <View style={styles.profileLine}></View>
        </View>
        <View style={styles.profileOptionContainer}>
            <ProfileOption onClick={()=>navigation.navigate('EditProfile')} icon={"create-outline"} text={"Edit profile"}/>
            <ProfileOption onClick={pickImage} icon={"person-circle-outline"} text={"Change profile picture"}/>
            <ProfileOption onClick={()=>navigation.navigate('ChangePassword')} icon={"lock-closed-sharp"} text={"Change password"}/>
        </View>
    </View>
}

export default Profile;