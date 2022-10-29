import { View, TextInput } from "react-native";
import styles from "./styles";

const InputField = (props) => {
    return(
        <View style={styles.signupContainer}>
            <TextInput keyboardType={props.type} secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} value={props.value} onChangeText={props.onChange} style={styles.inputContainer}/>
        </View>
    )
}

export default InputField;