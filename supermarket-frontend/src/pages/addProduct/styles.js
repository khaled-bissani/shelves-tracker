import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/palette";

export default StyleSheet.create({
    pageContainer: {
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    inputContainer: {
        width:'100%',
        alignItems:'center'
    },
    errorText: {
        textAlign: 'center',
        color:'red',
        fontWeight: fonts.bold,
        marginBottom:15,
        marginTop:10
    },
    imageContainer: {
        backgroundColor: colors.white,
        width:'75%',
        height:150,
        borderRadius:10,
        marginBottom:50
    },
    image: {
        width:'100%',
        height:'100%',
        resizeMode:"cover",
        borderRadius:10
    },
    buttonContainer: {
        marginTop:25,
        width:'100%',
        alignItems:'center'
    }
})