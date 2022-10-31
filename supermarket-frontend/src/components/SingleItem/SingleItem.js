import { Text, View, Image, Pressable } from "react-native";

const SingleItem = (props) => {
    return <>
        <Pressable>
            <View>
                <View>
                    <Image source={props.imageURL}/>
                </View>
                <Text>{props.label}</Text>
            </View>
        </Pressable>
    </>
}

export default SingleItem;