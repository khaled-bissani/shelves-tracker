import { StyleSheet } from "react-native";
import { fonts } from "../../constants/palette";

export default StyleSheet.create({
    profileOptionContainer:{
        marginLeft: 25,
        flexDirection:'row',
        alignItems:'center'
    },
    profileOptionText: {
        fontSize: fonts.text,
        marginLeft:25
    },
    pressedItem:{
        opacity:0.5,
    }
})