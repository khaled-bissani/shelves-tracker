import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants/palette';

export default StyleSheet.create({
    buttonContainer:{
        justifyContent:'center',
        width: '75%',
        height: 60,
        marginBottom:30
    },
    text: {
        textAlign:'center',
        textAlignVertical:'center',
        color: colors.white,
        fontSize: fonts.text,
        width:'100%',
        height:'100%'
    },
    pressedItem:{
        opacity:0.5,
    }
})