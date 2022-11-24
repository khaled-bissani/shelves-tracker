import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/palette";

export default StyleSheet.create({
    singleCategoryContainer:{
        marginTop:25
    },
    singleCategoryTitleContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:25
    },
    singleCtegoryTitle:{
        fontSize: fonts.subTitle,
        fontWeight: fonts.bold
    },
    singleItemContainer:{
        flexDirection:'row',
    }
})