import { View, TextInput } from "react-native";
import styles from "./styles";

const InputField = (props) => {
    return(
        <View>
            <TextInput keyboardType={props.type} placeholder={props.placeholder} value={props.value} onChangeText={props.onChange}/>
        </View>
    )
}

export default InputField;