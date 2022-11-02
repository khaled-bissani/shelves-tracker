import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { colors, fonts } from "../../constants/palette";
import SingleItem from "../../components/SingleItem/SingleItem";

const ViewMoreItem = () => {
    return <View>
        <View>
            <FontAwesome name="sort-amount-asc" size={fonts.iconSize} color={colors.primary} />
        </View>
        <SingleItem label={"item name"} quantity={'number'} width={170} height={170}/>
    </View>
}

export default ViewMoreItem;