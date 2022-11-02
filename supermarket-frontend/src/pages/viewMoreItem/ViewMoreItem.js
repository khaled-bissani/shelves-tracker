import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, Text, View, Pressable } from "react-native";
import { colors, fonts } from "../../constants/palette";
import SingleItem from "../../components/SingleItem/SingleItem";
import styles from "./styles";

const ViewMoreItem = () => {
    return <View>
        <View>
            <Pressable>
                <FontAwesome name="sort-amount-asc" size={fonts.iconSize} color={colors.primary} />
            </Pressable>
        </View>
        <ScrollView>
            <View>
                <SingleItem label={"item name"} quantity={'number'} width={170} height={170}/>
            </View>
        </ScrollView>
    </View>
}

export default ViewMoreItem;