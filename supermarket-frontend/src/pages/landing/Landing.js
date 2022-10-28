import { Image, Text, View } from "react-native";
import Buttons from "../../components/Button/Buttons";
import { colors } from "../../constants/palette";
import styles from "./styles";

const Landing = () => {
    return(
        <View style={styles.landingContainer}>
            <Image source={require('../../../assets/images/landing.png')} style={styles.image}/>
            <Text style={styles.titleText}>Shelves Tracker</Text>
            <Text style={styles.subTitle}>Always stocked for your needs</Text>
            <Buttons text={'SIGN IN'} color={colors.primary}/>
        </View>
    )
}

export default Landing;