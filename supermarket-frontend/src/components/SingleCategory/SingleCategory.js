import { Text, View, ScrollView } from "react-native";
import PressableText from "../PressableText/PressableText";
import SingleItem from "../SingleItem/SingleItem";

const SingleCategory = (props) => {
    return <View>
        <View>
            <Text>{props.categoryTitle}</Text>
            <PressableText text={'view more'} textColor={'#545454'} fontSize={12}/>
        </View>
        <ScrollView horizontal={true}>
            <View >
                <SingleItem/>
            </View>
        </ScrollView>
    </View>
}

export default SingleCategory;