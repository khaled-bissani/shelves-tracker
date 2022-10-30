import { Text, View } from "react-native";
import Buttons from "../../components/Button/Buttons";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import InputField from "../../components/InputField/InputField";
import { colors } from "../../constants/palette";
import styles from "./styles";

const Login = () => {

    const loginHandler = () => {
        console.log('clicked')
    }

    return(
        <View style={styles.login}>
            <View style={styles.inputs}>
                <InputField type={"default"} placeholder={"Username"}/>
                <InputField type={"default"} secureTextEntry={true} placeholder={"Password"}/>
                <InputField type={"default"} secureTextEntry={true} placeholder={"Current Password"}/>
            </View>
            <Buttons text={'LOGIN'} color={colors.primary} onClick={loginHandler}/>
            <Text style={styles.text}>or</Text>
            <GoogleButton text={'Continue with Google'}/>
        </View>
    )
}

export default Login;