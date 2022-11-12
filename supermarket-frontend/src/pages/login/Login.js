import { Text, View, ScrollView, Alert } from "react-native";
import {Formik} from "formik";
import * as yup from "yup";
import Buttons from "../../components/Button/Buttons";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import InputField from "../../components/InputField/InputField";
import { colors } from "../../constants/palette";
import styles from "./styles";
import sendRequest from "../../utils/axios";
import baseUrl from "../../../config/env";

const userSchema = yup.object({
    username: yup.string().required("Username is required").min(6),
    password: yup.string().required("Password is required").min(8),
    confirm_password: yup.string().required("Confirm password is required").oneOf([yup.ref('password'), null], 'Passwords must match'),
})

const Login = ({navigation}) => {
    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.login}>
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                            confirm_password: ''
                        }}
                        validationSchema={userSchema}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            sendRequest({method:"post",data:values,route:`${baseUrl.BASE_URL}/auth/login`})
                            .then((res)=>{
                                console.log(res)
                                navigation.navigate('Main');
                            })
                            .catch((err)=>{
                                Alert.alert('Invalid', 'Wrong username or password')
                                console.log(err.response.data)
                            })
                        }}
                    >
                        {(props) => (
                            <View style={styles.inputs}>
                                <InputField type={"default"} placeholder={"Username"} value={props.values.username} onChange={props.handleChange('username')} onBlur={props.handleBlur('username')}/>
                                <Text style={styles.errorText}>{props.touched.username && props.errors.username}</Text>
                                
                                <InputField type={"default"} secureTextEntry={true} placeholder={"Password"} value={props.values.password} onChange={props.handleChange('password')} onBlur={props.handleBlur('password')}/>
                                <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>

                                <InputField type={"default"} secureTextEntry={true} placeholder={"Confirm Password"} value={props.values.confirm_password} onChange={props.handleChange('confirm_password')} onBlur={props.handleBlur('confirm_password')}/>
                                <Text style={styles.errorText}>{props.touched.confirm_password && props.errors.confirm_password}</Text>

                                <View style={styles.buttonContainer}>
                                    <Buttons text={'LOGIN'} color={colors.primary} onClick={props.handleSubmit}/>
                                </View>
                            </View>
                        )}
                    </Formik>
                <Text style={styles.text}>or</Text>
                <GoogleButton text={'Continue with Google'}/>
            </View>
        </ScrollView>
    )
}

export default Login;