import { View } from "react-native";
import { colors } from "../../constants/palette";
import InputField from "../../components/InputField/InputField";
import Buttons from "../../components/Button/Buttons";
import styles from "./styles";
import {Formik} from "formik";

const ChangePassword = () => {
    return <Formik 
    initialValues={{
        old_password:'',
        new_password:'',
        confirm_password:'',
    }}
    onSubmit={(values,actions)=>{
        console.log(values)
    }}
    >
        {(props) => (
        <View style={styles.changePasswordContainer}>
            <View style={styles.inputs}>
                <InputField type={"default"} secureTextEntry={true} placeholder={"Old Password"} value={props.values.old_password} onChange={props.handleChange('old_password')} onBlur={props.handleBlur('old_password')}/>
                <InputField type={"default"} secureTextEntry={true} placeholder={"New Password"} value={props.values.new_password} onChange={props.handleChange('new_password')} onBlur={props.handleBlur('new_password')}/>
                <InputField type={"default"} secureTextEntry={true} placeholder={"Confirm Password"} value={props.values.confirm_password} onChange={props.handleChange('confirm_password')} onBlur={props.handleBlur('confirm_password')}/>
            </View>
            <Buttons text={'SAVE'} color={colors.primary} onClick={props.handleSubmit}/>
        </View>

        )}
    </Formik>
}

export default ChangePassword;