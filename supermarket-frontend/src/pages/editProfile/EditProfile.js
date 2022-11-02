import { View, Image } from "react-native";
import { colors } from "../../constants/palette";
import Buttons from "../../components/Button/Buttons";
import InputField from "../../components/InputField/InputField";
import styles from "./styles";

const EditProfile = () => {
    return <View style={styles.editProfileContainer}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={''}/>
        </View>
        <View style={styles.inputs}>
            <InputField type={"default"} placeholder={"Full Name"}/>
            <InputField type={"default"} placeholder={"Username"}/>
            <InputField type={"email-address"} placeholder={"Email"}/>
            <InputField type={"number-pad"} placeholder={"Phone Number"}/>
        </View>
        <Buttons text={'SAVE'} color={colors.primary}/>
    </View>
}

export default EditProfile;