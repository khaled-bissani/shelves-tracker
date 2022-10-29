import { Pressable, Text } from "react-native";

const PressableText = (props) => {
    return(
        <Pressable onPress={props.onClick}>
            <Text style={{color:props.textColor, fontSize:props.fontSize}}>{props.text}</Text>
        </Pressable>
    )
}

export default PressableText;