import { Text, View } from "react-native";
import Buttons from "../../components/Button/Buttons";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import InputField from "../../components/InputField/InputField";
import PressableText from "../../components/PressableText/PressableText";
import { colors, fonts } from "../../constants/palette";
import styles from "./styles";

const Signup = ({navigation}) => {

    const goToLogin = () => {
        navigation.navigate('Login');
    }

    const signupHandler = () => {
        navigation.navigate('Home');
    }

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
            <Buttons text={'CREATE ACCOUNT'} color={colors.primary} onClick={signupHandler}/>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                        Already have an account?
                </Text>
                <PressableText text={"Login"} textColor={colors.primary} fontSize={fonts.text} onClick={goToLogin}/>
            </View>  
            <View style={styles.horizontalLine}></View>
            <GoogleButton text={'Sign Up with Google'}/>
        </View>
    )
}

export default Signup;