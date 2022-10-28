import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants/palette';

export default StyleSheet.create({
    landingContainer:{
        flex:1,
        // flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',

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
        fontFamily: fonts.family,
        fontWeight: fonts.bold
    },
    subTitle: {
        color: colors.placeholder,
        fontSize: fonts.subTitle,
        fontFamily: fonts.family,
    }
});