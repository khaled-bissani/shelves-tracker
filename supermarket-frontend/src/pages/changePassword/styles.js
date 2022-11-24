import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/palette";

export default StyleSheet.create({
    changePasswordContainer: {
        justifyContent:'space-around',
        alignItems:'center',
        height:500
    },
    inputs:{
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
    },
    errorText: {
        textAlign: 'center',
        color:'red',
        fontWeight: fonts.bold,
        marginVertical:10
    }
})