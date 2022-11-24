import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/palette";

export default StyleSheet.create({
    pageContainer: {
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    imageContainer: {
        backgroundColor: colors.white,
        width:'75%',
        height:300,
        borderRadius:10
    },
    image: {
        width:'100%',
        height:'100%',
        resizeMode:"cover",
        borderRadius:10
    },
    inputContainer: {
        width:'100%',
        alignItems:'center'
    },
    errorText: {
        textAlign: 'center',
        color:'red',
        fontWeight: fonts.bold,
    },
    buttonContainer: {
        width:'100%',
        alignItems:'center'
    }
})