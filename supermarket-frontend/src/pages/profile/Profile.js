import { Text, View, Image} from "react-native";
import ProfileOption from "../../components/ProfileOption/ProfileOption";

const Profile = () => {
    return <View>
        <View>
            <Image source={''}/>
        </View>
        <Text>Spermarket</Text>
        <View></View>
        <View>
            <ProfileOption icon={"create-outline"} text={"Edit profile"}/>
            <ProfileOption icon={"person-circle-outline"} text={"Change profile picture"}/>
            <ProfileOption icon={"lock-closed-sharp"} text={"Change password"}/>
        </View>
    </View>
}

export default Profile;