import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants/palette';

export default StyleSheet.create({
    buttonContainer:{
        width: '75%',
        height: 60,
        marginBottom:30
    },
    textContainer: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
    },
    text: {
        color: colors.white,
        fontSize: fonts.text,  
    },
    pressedItem:{
        opacity:0.5,
    }
})