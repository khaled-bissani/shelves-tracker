import { Text, View, ScrollView } from "react-native";
import {Formik} from "formik";
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
            onSubmit={(values, actions) => {
                console.log('submitted')
            }}
            >
                {(props) => (
                <View style={styles.signup}>
                        <View style={styles.inputs}>
                            <InputField type={"default"} placeholder={"Full Name"} value={props.values.full_name} onChange={props.handleChange('full_name')}/>
                            <InputField type={"default"} placeholder={"Username"} value={props.values.username} onChange={props.handleChange('username')}/>
                            <InputField type={"email-address"} placeholder={"Email"} value={props.values.email} onChange={props.handleChange('email')}/>
                            <InputField type={"number-pad"} placeholder={"Phone Number"} value={props.values.phone_number} onChange={props.handleChange('phone_number')}/>
                            <InputField type={"default"} secureTextEntry={true} placeholder={"Password"} value={props.values.password} onChange={props.handleChange('password')}/>
                            <InputField type={"default"} secureTextEntry={true} placeholder={"Confirm Password"} value={props.values.confirm_password} onChange={props.handleChange('confirm_password')}/>
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