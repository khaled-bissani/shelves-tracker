import { Text, View, Image} from "react-native";
import ProfileOption from "../../components/ProfileOption/ProfileOption";
import styles from "./styles";

const Profile = () => {
    return <View>
        <View style={styles.container}>
            <View style={styles.profilePictureContainer}>
                <Image style={styles.profilePicture} source={''}/>
            </View>
            <Text style={styles.profileName}>Supermarket</Text>
            <View style={styles.profileLine}></View>
        </View>
        <View style={styles.profileOptionContainer}>
            <ProfileOption icon={"create-outline"} text={"Edit profile"}/>
            <ProfileOption icon={"person-circle-outline"} text={"Change profile picture"}/>
            <ProfileOption icon={"lock-closed-sharp"} text={"Change password"}/>
        </View>
    </View>
}

export default Profile;