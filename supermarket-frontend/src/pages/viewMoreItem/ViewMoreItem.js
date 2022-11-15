import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, Text, View, Pressable } from "react-native";
import { colors, fonts } from "../../constants/palette";
import SingleItem from "../../components/SingleItem/SingleItem";
import styles from "./styles";

const ViewMoreItem = ({navigation, route}) => {

    const categoryId = route.params.categoryId
    const categoryName = route.params.categoryName

    return <View style={styles.pageContainer}>
        <View style={styles.iconContainer}>
            <Pressable>
                <FontAwesome name="sort-amount-asc" size={fonts.iconSize} color={colors.primary} />
            </Pressable>
        </View>
        <ScrollView>
            <View style={styles.itemContainer}>
                <SingleItem label={"item name"} quantity={'number'} width={150} height={150} onClick={()=>navigation.navigate('SingleItemView')}/>
            </View>
        </ScrollView>
    </View>
}

export default ViewMoreItem;