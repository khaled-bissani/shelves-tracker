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
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:20
    },
    text:{
        fontSize: fonts.text,
        paddingRight:5
    },
    textContainer:{
        flexDirection:'row',
    },
    horizontalLine:{
        width:'100%',
        borderBottomWidth: 2,
        borderBottomColor: colors.light_gray
    }
})