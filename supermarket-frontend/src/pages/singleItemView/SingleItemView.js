import { Ionicons } from "@expo/vector-icons";
import { Text, View, Image } from "react-native";

const SingleItemView = () => {
    return <View>
        <View>
            <View>
                <Image source={''}/>
            </View>
        </View>
        <View>
            <View>
                <Text>Item Name</Text>
                <Ionicons name="create-outline"/>
            </View>
        </View>
    </View>
}

export default SingleItemView;