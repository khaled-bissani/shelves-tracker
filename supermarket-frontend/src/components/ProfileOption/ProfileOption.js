import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { colors, fonts } from "../../constants/palette";

const ProfileOption = (props) => {
    return <View>
        <Ionicons name={props.icon} color={colors.primary} size={fonts.iconSize}/>
        <Text>{props.text}</Text>
    </View>
}

export default ProfileOption;