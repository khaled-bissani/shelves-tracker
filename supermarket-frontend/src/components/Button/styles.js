import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants/palette';

export default StyleSheet.create({
    buttonContainer:{
        flexDirection:'column',
        justifyContent:'center',
        width: '75%',
        height: 60,
        marginBottom:30
    },
    text: {
        textAlign:'center',
        color: colors.white,
        fontSize: fonts.text,
        width:'100%',
    },
    pressedItem:{
        opacity:0.5,
    }
})