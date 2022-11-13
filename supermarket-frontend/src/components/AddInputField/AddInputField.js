import { TextInput } from "react-native";
import styles from "./styles";

const AddInputField = () => {
    return <TextInput placeholder={props.placeholder} value={props.value} onChangeText={props.onChange} onBlur={props.onBlur} style={styles.inputContainer}/>
}

export default AddInputField;