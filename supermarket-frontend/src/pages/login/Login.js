import { Text, View } from "react-native";
import Buttons from "../../components/Button/Buttons";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import InputField from "../../components/InputField/InputField";
import { colors, fonts } from "../../constants/palette";
import styles from "./styles";

const Login = () => {
    return(
        <View>
            <View>
                <InputField type={"default"} placeholder={"Username"}/>
                <InputField type={"default"} secureTextEntry={true} placeholder={"Password"}/>
                <InputField type={"default"} secureTextEntry={true} placeholder={"Current Password"}/>
            </View>
            <Buttons text={'LOGIN'} color={colors.primary}/>
            <Text>or</Text>
            <GoogleButton text={'Continue with Google'}/>
        </View>
    )
}

export default Login;