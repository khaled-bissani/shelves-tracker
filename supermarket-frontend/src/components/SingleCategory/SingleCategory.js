import { Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PressableText from "../PressableText/PressableText";
import SingleItem from "../SingleItem/SingleItem";
import styles from "./styles";

const SingleCategory = (props) => {

    const navigation= useNavigation();

    return <View style={styles.singleCategoryContainer}>
        <View style={styles.singleCategoryTitleContainer}>
            <Text style={styles.singleCtegoryTitle}>{props.categoryTitle}</Text>
            <PressableText onClick={()=>navigation.navigate('ViewMoreItem')} text={'view more'} textColor={'#545454'} fontSize={12}/>
        </View>
        <ScrollView horizontal={true}>
            <View style={styles.singleItemContainer}>
                <SingleItem label={"item name"} quantity={'number'}/>
            </View>
        </ScrollView>
    </View>
}

export default SingleCategory;