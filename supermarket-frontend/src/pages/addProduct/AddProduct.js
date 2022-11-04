import { Image, Text, TextInput, View } from "react-native";
import { colors } from "../../constants/palette";
import Buttons from "../../components/Button/Buttons";

const AddProduct = () => {
    return <View>
    <View>
        <Image source={''}/>
    </View>
    <TextInput placeholder={'Product Name'}/>
    <TextInput placeholder={'Product Quantity '}/>
    <TextInput placeholder={'Product Expiry Date'}/>
    <View>
        <Buttons text={'GENERATE BARCODE'} color={colors.primary}/>
        <Buttons text={'UPLOAD IMAGE'} color={colors.primary}/>
        <Buttons text={'SAVE'} color={colors.primary}/>
    </View>
</View>
}

export default AddProduct;