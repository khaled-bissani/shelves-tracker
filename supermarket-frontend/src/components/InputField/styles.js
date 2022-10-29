import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants/palette';

export default StyleSheet.create({
    signupContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },
    inputContainer: {
        width:'75%',
        height:60,
        borderBottomWidth:2,
        borderBottomColor: colors.light_gray,
        fontSize: fonts.text,
        paddingLeft:10,
    }
})