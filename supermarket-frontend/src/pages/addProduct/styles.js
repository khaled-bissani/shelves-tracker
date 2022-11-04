import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/palette";

export default StyleSheet.create({
    pageContainer: {
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    input: {
        width:'75%',
        height:50,
        backgroundColor: colors.white,
        fontSize: fonts.text,
        paddingLeft:10,
    },
    imageContainer: {
        backgroundColor: colors.white,
        width:315,
        height:150,
        borderRadius:10
    },
    image: {
        width:'100%',
        height:'100%',
        resizeMode:"cover"
    },
    buttonContainer: {
        width:'100%',
        alignItems:'center'
    }
})