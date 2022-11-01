import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/palette";

export default StyleSheet.create({
    container: {
        marginVertical:30,
        height:250,
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    profilePictureContainer: {
        backgroundColor: colors.light_gray,
        width: 150,
        height:150,
        borderRadius:100
    },
    profilePicture: {
        width:'100%',
        height:'100%',
        resizeMode:"contain"
    },
    profileName: {
        fontSize: fonts.title
    },
    profileLine: {
        width:'100%',
        borderBottomWidth: 2,
        borderBottomColor: colors.light_gray
    },
    profileOptionContainer: {
        height:250,
        flexDirection:'column',
        justifyContent:'space-evenly'
    }
})