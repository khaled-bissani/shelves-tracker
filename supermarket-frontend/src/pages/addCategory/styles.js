import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/palette";

export default StyleSheet.create({
    pageContainer: {
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    input: {
        width:'75%',
        height:50,
        backgroundColor: colors.white,
        fontSize: fonts.text,
        paddingLeft:10,
        // marginBottom:20
    },
    imageContainer: {
        backgroundColor: colors.white,
        width:250,
        height:250,
        borderRadius:10
    },
    image: {
        width:'100%',
        height:'100%',
        resizeMode:"contain"
    },
    buttonContainer: {
        width:'100%',
        alignItems:'center'
    }
})