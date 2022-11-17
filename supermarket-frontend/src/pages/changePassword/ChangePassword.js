import { View, Text } from "react-native";
import { colors } from "../../constants/palette";
import InputField from "../../components/InputField/InputField";
import Buttons from "../../components/Button/Buttons";
import styles from "./styles";
import {Formik} from "formik";
import * as yup from "yup";

const passwordSchema = yup.object({
    old_password: yup.string().required("Old Password is required").min(8),
    new_password: yup.string().required("New Password is required").min(8),
    confirm_password: yup.string().required("Confirm password is required").oneOf([yup.ref('new_password'), null], 'Passwords must match'),
})

const ChangePassword = () => {
    return <Formik 
    initialValues={{
        old_password:'',
        new_password:'',
        confirm_password:'',
    }}
    validationSchema={passwordSchema}
    onSubmit={(values,actions)=>{
        console.log(values)
    }}
    >
        {(props) => (
        <View style={styles.changePasswordContainer}>
            <View style={styles.inputs}>
                <InputField type={"default"} secureTextEntry={true} placeholder={"Old Password"} value={props.values.old_password} onChange={props.handleChange('old_password')} onBlur={props.handleBlur('old_password')}/>
                <Text style={styles.errorText}>{props.touched.old_password && props.errors.old_password}</Text>

                <InputField type={"default"} secureTextEntry={true} placeholder={"New Password"} value={props.values.new_password} onChange={props.handleChange('new_password')} onBlur={props.handleBlur('new_password')}/>
                <Text style={styles.errorText}>{props.touched.new_password && props.errors.new_password}</Text>

                <InputField type={"default"} secureTextEntry={true} placeholder={"Confirm Password"} value={props.values.confirm_password} onChange={props.handleChange('confirm_password')} onBlur={props.handleBlur('confirm_password')}/>
                <Text style={styles.errorText}>{props.touched.confirm_password && props.errors.confirm_password}</Text>
            </View>
            <Buttons text={'SAVE'} color={colors.primary} onClick={props.handleSubmit}/>
        </View>

        )}
    </Formik>
}

export default ChangePassword;