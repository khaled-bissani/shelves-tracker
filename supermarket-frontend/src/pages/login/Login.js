import { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import Buttons from "../../components/Button/Buttons";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import InputField from "../../components/InputField/InputField";
import { colors } from "../../constants/palette";
import styles from "./styles";

const Login = ({navigation}) => {

    const [user, setUser] = useState({
        username: '',
        password: '',
        confirm_password: ''
    });

    const handleChange=(e,input)=> {
        setUser({
          ...user, [`${input}`]: e.target.value
        });
    }

    const loginHandler = () => {
        navigation.navigate('Main');
    }

    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.login}>
                <View style={styles.inputs}>
                    <InputField type={"default"} placeholder={"Username"}/>
                    <InputField type={"default"} secureTextEntry={true} placeholder={"Password"}/>
                    <InputField type={"default"} secureTextEntry={true} placeholder={"Confirm Password"}/>
                </View>
                <Buttons text={'LOGIN'} color={colors.primary} onClick={loginHandler}/>
                <Text style={styles.text}>or</Text>
                <GoogleButton text={'Continue with Google'}/>
            </View>
        </ScrollView>
    )
}

export default Login;