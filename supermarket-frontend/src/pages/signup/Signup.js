import { Text, View } from "react-native";
import InputField from "../../components/InputField/InputField";
import styles from "./styles";

const Signup = () => {
    return(
        <View style={styles.signup}>
            <InputField type={"default"} placeholder={"Full Name"}/>
            <InputField type={"default"} placeholder={"Username"}/>
            <InputField type={"email-address"} placeholder={"Email"}/>
            <InputField type={"number-pad"} placeholder={"Phone Number"}/>
            <InputField type={"default"} secureTextEntry={true} placeholder={"Password"}/>
            <InputField type={"default"} secureTextEntry={true} placeholder={"Current Password"}/>
        </View>
    )
}

export default Signup;