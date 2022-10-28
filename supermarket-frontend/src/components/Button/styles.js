import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants/palette';

export default StyleSheet.create({
    buttonContainer:{
        justifyContent:'center',
        backgroundColor: colors.primary,
        width: '75%',
        height: '8%',
    },
    text: {
        textAlign:'center',
        color: colors.white,
        
    }
})