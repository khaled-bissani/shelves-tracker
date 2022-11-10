import { Text, View, ScrollView } from "react-native";
import {Formik} from "formik";
import * as yup from "yup";
import Buttons from "../../components/Button/Buttons";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import InputField from "../../components/InputField/InputField";
import { colors } from "../../constants/palette";
import styles from "./styles";

const userSchema = yup.object({
    username: yup.string().required().min(6),
    password: yup.string().required().min(8),
    confirm_password: yup.string().required().min(8),
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
                            console.log('submitted');
                            navigation.navigate('Main');
                        }}
                    >
                        {(props) => (
                            <View style={styles.inputs}>
                                <InputField type={"default"} placeholder={"Username"} value={props.values.username} onChange={props.handleChange('username')}/>
                                <Text style={styles.errorText}>{props.touched.username && props.errors.username}</Text>
                                
                                <InputField type={"default"} secureTextEntry={true} placeholder={"Password"} value={props.values.password} onChange={props.handleChange('password')}/>
                                <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>

                                <InputField type={"default"} secureTextEntry={true} placeholder={"Confirm Password"} value={props.values.confirm_password} onChange={props.handleChange('confirm_password')}/>
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