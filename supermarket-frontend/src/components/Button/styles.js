import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants/palette';

export default StyleSheet.create({
    buttonContainer:{
        justifyContent:'center',
        width: '75%',
        height: 60,
    },
    text: {
        textAlign:'center',
        color: colors.white,
        fontSize: fonts.text
    }
})