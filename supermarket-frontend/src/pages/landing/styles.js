import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants/palette';

export default StyleSheet.create({
    landingContainer:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',

    },
    image:{
        width:'50%',
        resizeMode:'contain'
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