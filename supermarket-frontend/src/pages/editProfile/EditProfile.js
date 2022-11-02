import { View, Image } from "react-native";
import { colors } from "../../constants/palette";
import Buttons from "../../components/Button/Buttons";
import InputField from "../../components/InputField/InputField";

const EditProfile = () => {
    return <View>
        <View>
            <Image source={''}/>
        </View>
        <InputField type={"default"} placeholder={"Full Name"}/>
        <InputField type={"default"} placeholder={"Username"}/>
        <InputField type={"email-address"} placeholder={"Email"}/>
        <InputField type={"number-pad"} placeholder={"Phone Number"}/>
        <Buttons text={'SAVE'} color={colors.primary}/>
    </View>
}

export default EditProfile;