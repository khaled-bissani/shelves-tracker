import { Text, View } from "react-native";
import PressableText from "../PressableText/PressableText";

const SingleCategory = (props) => {
    return <View>
        <View>
            <Text>{props.categoryTitle}</Text>
            <PressableText text={'view more'} textColor={'#545454'} fontSize={12}/>
        </View>
    </View>
}

export default SingleCategory;