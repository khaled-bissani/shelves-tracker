import { StyleSheet } from 'react-native';
import colors from '../../constants/palette';

export default StyleSheet.create({
    landingContainer:{
        flexDirection:'column',
        alignContent:'center',
        justifyContent:'center',
        width:'100%',
    },
    image:{
        width:'70%',
        height:'75%'
    },
    titleText:{
        color: colors.primary,
        
    }
});