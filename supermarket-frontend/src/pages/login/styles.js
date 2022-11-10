import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants/palette';

export default StyleSheet.create({
    login: {
        flex:1,
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    inputs:{
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:20
    },
    buttonContainer: {
        marginTop:75,
        width:'100%',
        alignItems:'center'
    },
    text:{
        color:colors.primary,
        fontSize: fonts.text,
        paddingRight:5
    },
    errorText: {
        textAlign: 'center',
        color:'red',
        fontWeight: fonts.bold,
    }
})