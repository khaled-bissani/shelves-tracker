import { StyleSheet } from "react-native";
import { colors,fonts } from "../../constants/palette";

export default StyleSheet.create({
    categoryContainer: {
        alignItems:'center',
        marginRight:25
    },
    categoryBox: {
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
    pressedItem:{
        opacity:0.5,
    }
})