import { Text, View } from "react-native";
import Buttons from "../../components/Button/Buttons";
import InputField from "../../components/InputField/InputField";
import { colors } from "../../constants/palette";
import styles from "./styles";

const Signup = () => {
    return(
        <View style={styles.signup}>
            <View style={styles.inputs}>
                <InputField type={"default"} placeholder={"Full Name"}/>
                <InputField type={"default"} placeholder={"Username"}/>
                <InputField type={"email-address"} placeholder={"Email"}/>
                <InputField type={"number-pad"} placeholder={"Phone Number"}/>
                <InputField type={"default"} secureTextEntry={true} placeholder={"Password"}/>
                <InputField type={"default"} secureTextEntry={true} placeholder={"Current Password"}/>
            </View>
            <Buttons text={'CREATE ACCOUNT'} color={colors.primary}/>
        </View>
    )
}

export default Signup;