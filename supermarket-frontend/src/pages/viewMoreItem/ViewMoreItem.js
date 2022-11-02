import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { colors, fonts } from "../../constants/palette";

const ViewMoreItem = () => {
    return <View>
        <View>
            <FontAwesome name="sort-amount-asc" size={fonts.iconSize} color={colors.primary} />
        </View>
    </View>
}

export default ViewMoreItem;