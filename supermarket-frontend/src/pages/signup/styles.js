import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants/palette';

export default StyleSheet.create({
    signup: {
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },
    inputs:{
        flex:1,
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center'
    },
    button:{
        width:'100%'
    },
    text:{
        fontSize: fonts.text,
        paddingRight:5
    },
    textContainer:{
        flexDirection:'row',
    }
})