import { Text, View, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileOption from "../../components/ProfileOption/ProfileOption";
import styles from "./styles";

const Profile = () => {

    const navigation = useNavigation();

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
            <ProfileOption onClick={()=>navigation.navigate('ChangeProfilePicture')} icon={"person-circle-outline"} text={"Change profile picture"}/>
            <ProfileOption icon={"lock-closed-sharp"} text={"Change password"}/>
        </View>
    </View>
}

export default Profile;