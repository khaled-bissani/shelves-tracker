import { Text, View, ScrollView } from "react-native";
import {Formik} from "formik";
import * as yup from "yup";
import Buttons from "../../components/Button/Buttons";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import InputField from "../../components/InputField/InputField";
import PressableText from "../../components/PressableText/PressableText";
import { colors, fonts } from "../../constants/palette";
import styles from "./styles";

const userSchema = yup.object({
    full_name: yup.string().required("Full name is required").min(6),
    username: yup.string().required("Username is required").min(6),
    email: yup.string().email("Field should contain a valid email").max(255).required("Email is required"),
    phone_number: yup.number().min(8).required("Phone number is required"),
    password: yup.string().required("Password is required").min(8),
    confirm_password: yup.string().required("Confirm password is required").oneOf([yup.ref('password'), null], 'Passwords must match'),
})

const Signup = ({navigation}) => {

    const goToLogin = () => {
        navigation.navigate('Login');
    }

    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Formik 
            initialValues={{
                full_name: '',
                username: '',
                email:'',
                phone_number:'',
                password: '',
                confirm_password: ''
            }}
            validationSchema={userSchema}
            onSubmit={(values, actions) => {
                console.log('submitted')
            }}
            >
                {(props) => (
                <View style={styles.signup}>
                        <View style={styles.inputs}>
                            <InputField type={"default"} placeholder={"Full Name"} value={props.values.full_name} onChange={props.handleChange('full_name')} onBlur={props.handleBlur('full_name')}/>
                            <Text style={styles.errorText}>{props.touched.full_name && props.errors.full_name}</Text>

                            <InputField type={"default"} placeholder={"Username"} value={props.values.username} onChange={props.handleChange('username')} onBlur={props.handleBlur('username')}/>
                            <Text style={styles.errorText}>{props.touched.username && props.errors.username}</Text>

                            <InputField type={"email-address"} placeholder={"Email"} value={props.values.email} onChange={props.handleChange('email')} onBlur={props.handleBlur('email')}/>
                            <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>

                            <InputField type={"number-pad"} placeholder={"Phone Number"} value={props.values.phone_number} onChange={props.handleChange('phone_number')} onBlur={props.handleBlur('phone_number')}/>
                            <Text style={styles.errorText}>{props.touched.phone_number && props.errors.phone_number}</Text>

                            <InputField type={"default"} secureTextEntry={true} placeholder={"Password"} value={props.values.password} onChange={props.handleChange('password')} onBlur={props.handleBlur('password')}/>
                            <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>

                            <InputField type={"default"} secureTextEntry={true} placeholder={"Confirm Password"} value={props.values.confirm_password} onChange={props.handleChange('confirm_password')} onBlur={props.handleBlur('confirm_password')}/>
                            <Text style={styles.errorText}>{props.touched.confirm_password && props.errors.confirm_password}</Text>
                        </View>
                        <Buttons text={'CREATE ACCOUNT'} color={colors.primary} onClick={props.handleSubmit}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                                Already have an account?
                        </Text>
                        <PressableText text={"Login"} textColor={colors.primary} fontSize={fonts.text} onClick={goToLogin}/>
                    </View>  
                    <View style={styles.horizontalLine}></View>
                    <GoogleButton text={'Sign Up with Google'}/>
                </View>
                )}
            </Formik>
        </ScrollView>
    )
}

export default Signup;