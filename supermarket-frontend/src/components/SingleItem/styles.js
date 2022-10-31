import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/palette";

export default StyleSheet.create({
    singleItemContainer: {
        alignItems:'center',
        marginRight:25
    },
    singleItemBox: {
        backgroundColor: colors.white,
        width: 130,
        height:130,
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
})