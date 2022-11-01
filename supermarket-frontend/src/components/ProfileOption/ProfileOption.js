import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { colors, fonts } from "../../constants/palette";
import styles from "./styles";

const ProfileOption = (props) => {
    return <Pressable onPress={props.onClick} android_ripple={{color: '#ddd'}} style={({pressed}) => pressed && styles.pressedItem}>
        <View style={styles.profileOptionContainer}>
            <Ionicons name={props.icon} color={colors.primary} size={fonts.iconSize}/>
            <Text style={styles.profileOptionText}>{props.text}</Text>
        </View>
    </Pressable>
}

export default ProfileOption;