import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/palette";

export default StyleSheet.create({
    singleContactContainer: {
        flexDirection:'row',
        alignItems:'center',
        padding: 25,
        borderBottomWidth:2,
        borderBottomColor: colors.light_gray,
    },
    singleContactImageContainer: {
        backgroundColor: colors.light_gray,
        width: 70,
        height: 70,
    },
    singleContactImage: {
        width:'100%',
        height:'100%',
        resizeMode:"contain"
    },
    singleContactNameContainer: {
        marginLeft:30
    },
    singleContactName: {
        fontSize:fonts.text,
        fontWeight: fonts.bold
    },
    singleContactMessage: {
        fontSize: 14
    }
})