import { Text, View } from "react-native";
import InputField from "../../components/InputField/InputField";

const Signup = () => {
    return(
        <View>
            <InputField type={"default"} placeholder={"Full Name"}/>
        </View>
    )
}

export default Signup;