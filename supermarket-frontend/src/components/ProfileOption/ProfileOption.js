import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { colors, fonts } from "../../constants/palette";
import styles from "./styles";

const ProfileOption = (props) => {
    return <View style={styles.profileOptionContainer}>
        <Ionicons name={props.icon} color={colors.primary} size={fonts.iconSize}/>
        <Text style={styles.profileOptionText}>{props.text}</Text>
    </View>
}

export default ProfileOption;