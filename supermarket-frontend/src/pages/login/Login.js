import { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import {Formik} from "formik";
import Buttons from "../../components/Button/Buttons";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import InputField from "../../components/InputField/InputField";
import { colors } from "../../constants/palette";
import styles from "./styles";

const Login = ({navigation}) => {

    const loginHandler = () => {
        navigation.navigate('Main');
    }

    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.login}>
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                            confirm_password: ''
                        }}
                        onSubmit={(values) => {

                        }}
                    >
                        {(props) => (
                            <View style={styles.inputs}>
                                <InputField type={"default"} placeholder={"Username"} value={props.values.username} onChange={props.handleChange('username')}/>

                                <InputField type={"default"} secureTextEntry={true} placeholder={"Password"} value={props.values.password} onChange={props.handleChange('password')}/>

                                <InputField type={"default"} secureTextEntry={true} placeholder={"Confirm Password"} value={props.values.confirm_password} onChange={props.handleChange('confirm_password')}/>
                            </View>
                        )}
                    </Formik>
                <Buttons text={'LOGIN'} color={colors.primary} onClick={loginHandler}/>
                <Text style={styles.text}>or</Text>
                <GoogleButton text={'Continue with Google'}/>
            </View>
        </ScrollView>
    )
}

export default Login;