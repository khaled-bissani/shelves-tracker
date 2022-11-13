import { TextInput } from "react-native";

const AddInputField = () => {
    return <TextInput placeholder={props.placeholder} value={props.value} onChangeText={props.onChange} onBlur={props.onBlur}/>
}

export default AddInputField;