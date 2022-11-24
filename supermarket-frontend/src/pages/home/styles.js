import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants/palette";

export default StyleSheet.create({
    homeContainer:{
        marginHorizontal:25,
        marginTop:25
    },
    mainTitleContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:25
    },
    allCategoriesTitle:{
        fontSize: fonts.title,
        fontWeight: fonts.bold
    },
    categoriesContainer:{
        flexDirection:'row',
    }
})