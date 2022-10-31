import { Text, View, ScrollView } from "react-native";
import PressableText from "../PressableText/PressableText";
import SingleItem from "../SingleItem/SingleItem";
import styles from "./styles";

const SingleCategory = (props) => {
    return <View style={styles.singleCategoryContainer}>
        <View style={styles.singleCategoryTitleContainer}>
            <Text style={styles.singleCtegoryTitle}>{props.categoryTitle}</Text>
            <PressableText text={'view more'} textColor={'#545454'} fontSize={12}/>
        </View>
        <ScrollView horizontal={true}>
            <View style={styles.singleItemContainer}>
                <SingleItem label={"item name"}/>
            </View>
        </ScrollView>
    </View>
}

export default SingleCategory;