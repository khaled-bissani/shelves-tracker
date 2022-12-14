import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants/palette';

export default StyleSheet.create({
    landingContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:30
    },
    image:{
        flex:3,
        width:'50%',
        resizeMode:'contain'
    },
    textContainer:{
        flex:1,
        alignItems:'center'
    },
    titleText:{
        color: colors.primary,
        fontSize: fonts.title,
        fontWeight: fonts.bold
    },
    subTitle: {
        color: colors.placeholder,
        fontSize: fonts.subTitle,
    }
});