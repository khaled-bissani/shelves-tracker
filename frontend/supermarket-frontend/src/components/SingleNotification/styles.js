import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { colors, fonts } from "../../constants/palette";

export default StyleSheet.create({
    SingleNotificationContainer:{
        padding: 25,
        borderBottomWidth:2,
        borderBottomColor: colors.light_gray
    },
    SingleNotification: {
        fontSize: fonts.text
    }
})