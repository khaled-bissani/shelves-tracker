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
        new:'',
        confirm_password:'',
    }}
    >
        {(props) => (
        <View style={styles.changePasswordContainer}>
            <View style={styles.inputs}>
                <InputField type={"default"} secureTextEntry={true} placeholder={"Old Password"}/>
                <InputField type={"default"} secureTextEntry={true} placeholder={"New Password"}/>
                <InputField type={"default"} secureTextEntry={true} placeholder={"Confirm Password"}/>
            </View>
            <Buttons text={'SAVE'} color={colors.primary}/>
        </View>

        )}
    </Formik>
}

export default ChangePassword;