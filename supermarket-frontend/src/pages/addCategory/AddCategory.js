import { Image, Text, TextInput, View } from "react-native";
import { colors } from "../../constants/palette";
import Buttons from "../../components/Button/Buttons";
import styles from "./styles";

const AddCategory = () => {
    return <View style={styles.pageContainer}>
        <TextInput style={styles.input} placeholder={'Category'}/>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={''}/>
        </View>
        <View style={styles.buttonContainer}>
            <Buttons text={'UPLOAD IMAGE'} color={colors.primary}/>
            <Buttons text={'SAVE'} color={colors.primary}/>
        </View>
    </View>
}

export default AddCategory;