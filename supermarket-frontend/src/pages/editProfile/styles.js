import { StyleSheet } from "react-native";
import { colors } from "../../constants/palette";

export default StyleSheet.create({
    editProfileContainer: {
        justifyContent:'space-around',
        alignItems:'center',
        height:650
    },
    imageContainer: {
        backgroundColor: colors.light_gray,
        width: 150,
        height:150,
        borderRadius:100
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:"contain"
    },
    inputs:{
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        // marginTop:20
    },
})