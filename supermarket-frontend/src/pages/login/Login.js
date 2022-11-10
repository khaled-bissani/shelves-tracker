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

    const handleChange=(valueIdentifier,input)=> {
        setUser((currentValue)=>{
            return {
                ...currentValue,
                [valueIdentifier]:input
            };
        });
    }

    const loginHandler = () => {
        navigation.navigate('Main');
    }

    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.login}>
                <View style={styles.inputs}>
                    <InputField type={"default"} placeholder={"Username"} value={user.username} onChangeText={(e)=>handleChange(e,"username")}/>
                    <InputField type={"default"} secureTextEntry={true} placeholder={"Password"} value={user.password} onChangeText={(e)=>handleChange(e,"password")}/>
                    <InputField type={"default"} secureTextEntry={true} placeholder={"Confirm Password"} value={user.confirm_password} onChangeText={(e)=>handleChange(e,"confirm_password")}/>
                </View>
                <Buttons text={'LOGIN'} color={colors.primary} onClick={loginHandler}/>
                <Text style={styles.text}>or</Text>
                <GoogleButton text={'Continue with Google'}/>
            </View>
        </ScrollView>
    )
}

export default Login;