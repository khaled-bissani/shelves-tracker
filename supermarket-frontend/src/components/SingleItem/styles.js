import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/palette";

export default StyleSheet.create({
    singleItemContainer: {
        marginRight:25
    },
    singleItemBox: {
        backgroundColor: colors.white,
        borderRadius:10
    },
    imageContainer: {
        width:'100%',
        height:'100%',
        resizeMode:"contain"
    },
    text:{
        fontSize: fonts.text,
        marginTop:10
    },
    quantity: {
        fontSize: 14,
        color: colors.primary
    },
    pressedItem:{
        opacity:0.5,
    }
})