import { View } from "react-native";
import { colors } from "../../constants/palette";
import InputField from "../../components/InputField/InputField";
import Buttons from "../../components/Button/Buttons";

const ChangePassword = () => {
    return <View>
    <View>
        <InputField type={"default"} secureTextEntry={true} placeholder={"Old Password"}/>
        <InputField type={"default"} secureTextEntry={true} placeholder={"New Password"}/>
        <InputField type={"default"} secureTextEntry={true} placeholder={"Confirm Password"}/>
    </View>
    <Buttons text={'SAVE'} color={colors.primary}/>
</View>
}

export default ChangePassword;