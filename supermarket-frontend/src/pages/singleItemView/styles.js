import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/palette";

export default StyleSheet.create({
    singleItemViewContainer: {
        flex:1
    },
    topContainer: {
        justifyContent:'center',
        alignItems:'center',
        flex:4
    },
    imageContainer: {
        width: 150,
        height:150,
    },
    image: {
        width:'100%',
        height:'100%',
        resizeMode:"contain"
    },
    bottomContainer: {
        backgroundColor: colors.white,
        borderTopStartRadius:50,
        borderTopEndRadius:50,
        flex:6.5
    },
    textContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:25
    },
    text:{
        fontSize: fonts.subTitle,
        fontWeight: fonts.bold
    },
})