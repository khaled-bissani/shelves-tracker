import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants/palette';

export default StyleSheet.create({
    buttonContainer:{
        justifyContent:'center',
        width: '75%',
        height: 60,
        marginBottom:30,
        backgroundColor: colors.white
    },
    insideContainer:{
        flexDirection:'row',
        justifyContent:'center',
        width:'100%',
        height:'100%'
    },
    imageContainer:{
        width:36,
        height:36,
        marginTop:10,
        marginRight:10
    },
    text: {
        color: colors.black,
        fontSize: fonts.text,
        textAlignVertical:'center',
    },
    pressedItem:{
        opacity:0.5,
    }
})