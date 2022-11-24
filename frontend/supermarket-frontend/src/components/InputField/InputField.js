import { TextInput } from "react-native";
import styles from "./styles";

const InputField = (props) => {
    return(
        <>
            <TextInput keyboardType={props.type} secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} value={props.value} onChangeText={props.onChange} style={styles.inputContainer} onBlur={props.onBlur}/>
        </>
    )
}

export default InputField;