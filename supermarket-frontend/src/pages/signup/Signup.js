import { Text, View } from "react-native";
import Buttons from "../../components/Button/Buttons";
import InputField from "../../components/InputField/InputField";
import PressableText from "../../components/PressableText/PressableText";
import { colors, fonts } from "../../constants/palette";
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
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                        Already have an account?
                </Text>
                <PressableText text={"Login"} textColor={colors.primary} fontSize={fonts.text}/>
            </View>  
            <View style={styles.horizontalLine}></View>
        </View>
    )
}

export default Signup;