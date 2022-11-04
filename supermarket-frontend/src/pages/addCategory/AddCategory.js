import { Image, Text, TextInput, View } from "react-native";
import { colors } from "../../constants/palette";
import Buttons from "../../components/Button/Buttons";

const AddCategory = () => {
    return <View>
        <TextInput/>
        <View>
            <Image source={''}/>
        </View>
        <Buttons text={'UPLOAD IMAGE'} color={colors.primary}/>
        <Buttons text={'SAVE'} color={colors.primary}/>
    </View>
}

export default AddCategory;