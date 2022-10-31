import { StyleSheet } from "react-native";
import { colors,fonts } from "../../constants/palette";

export default StyleSheet.create({
    categoryContainer: {
        alignItems:'center',
    },
    categoryBox: {
        backgroundColor: colors.white,
        width: 100,
        height:100,
        borderRadius:10
    },
    text:{
        fontSize: fonts.text,
        marginTop:10
    },
    pressedItem:{
        opacity:0.5,
    }
})