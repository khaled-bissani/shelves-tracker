import { Image, Text, View } from "react-native";
import Buttons from "../../components/Button/Buttons";
import { colors } from "../../constants/palette";
import styles from "./styles";

const Landing = () => {
    return(
        <View style={styles.landingContainer}>
            <Image source={require('../../../assets/images/landing.png')} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Shelves Tracker</Text>
                <Text style={styles.subTitle}>Always stocked for your needs</Text>
            </View>
            <Buttons text={'SIGN IN'} color={colors.primary}/>
            <Buttons text={'SIGN UP'} color={colors.secondary}/>
        </View>
    )
}

export default Landing;