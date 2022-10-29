import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants/palette';

export default StyleSheet.create({
    signupContainer:{
        width:'100%'
    },
    inputContainer: {
        width:'75%',
        height:50,
        borderBottomWidth:2,
        borderBottomColor: colors.light_gray,
        fontSize: fonts.text,
        paddingLeft:10,
    }
})