import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, Text, View, Pressable } from "react-native";
import { colors, fonts } from "../../constants/palette";
import SingleItem from "../../components/SingleItem/SingleItem";
import styles from "./styles";
import Categories from "../../components/Categories/Categories";

const ViewMoreCategory = () => {
    return <View style={styles.pageContainer}>
        <View style={styles.iconContainer}>
            <Pressable>
                <FontAwesome name="sort-amount-asc" size={fonts.iconSize} color={colors.primary} />
            </Pressable>
        </View>
        <ScrollView>
            <View style={styles.itemContainer}>
                <Categories label={'Category'} width={150} height={150}/>
            </View>
        </ScrollView>
    </View>
}

export default ViewMoreCategory;