import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/palette";

export default StyleSheet.create({
    pageContainer: {
        flex:1,
        justifyContent:'space-evenly',
    },
    footerContainer: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor: colors.primary,
        height:50
    },
    textInput: {
        width:'75%',
        backgroundColor: colors.white,
        borderRadius:10,
        fontSize: fonts.text,
        paddingHorizontal:10,
    },
    pressedItem:{
        opacity:0.5,
    }
})