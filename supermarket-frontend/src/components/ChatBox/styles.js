import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/palette";

export default StyleSheet.create({
    messageContainer: {
        justifyContent:'space-between',
        backgroundColor:colors.light_gray,
        width:'88%',
        padding:10,
        marginHorizontal:25,
        marginVertical:15
    },
    name: {
        fontSize: 14
    },
    messageBox: {
        flexDirection:'row',
        flexWrap:'wrap',
    },
    message: {
        fontSize: fonts.text
    },
    timeContainer: {
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    time: {
        fontSize: 12
    },
})