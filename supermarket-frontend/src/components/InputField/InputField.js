import { View, TextInput } from "react-native";

const InputField = (props) => {
    return(
        <View>
            <TextInput keyboardType={props.type} placeholder={props.placeholder} value={props.value} onChangeText={props.onChange}/>
        </View>
    )
}

export default InputField;