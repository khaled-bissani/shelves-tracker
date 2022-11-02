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
    elementContainer:{
        height:'70%',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    boxContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'85%',
        height: 60,
        paddingHorizontal:20,
        backgroundColor: colors.background,
    },
    textElement: {
        color:'#9B9B9B',
        fontSize:fonts.text,
    },
    value: {
        fontSize:fonts.text,
    },
    barCodeContainer: {
        width: 80,
        height:40,
    },
})