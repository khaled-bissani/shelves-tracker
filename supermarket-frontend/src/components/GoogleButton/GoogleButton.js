import { Image, Pressable, Text, View } from "react-native";

const GoogleButton = (props) => {
    return(
        <View>
            <Pressable onPress={props.onClick}>
                <Image source={require('../../../assets/images/google.png')}/> 
                <Text>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoogleButton;