import { Image, Text, View } from "react-native";
import Buttons from "../../components/Button/Buttons";
import { colors } from "../../constants/palette";
import styles from "./styles";

const Landing = () => {

    const signinHandling = () =>{
        console.log('signin clicked')
    }

    const signupHandling = () =>{
        console.log('signup clicked')
    }

    return(
        <View style={styles.landingContainer}>
            <Image source={require('../../../assets/images/landing.png')} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Shelves Tracker</Text>
                <Text style={styles.subTitle}>Always stocked for your needs</Text>
            </View>
            <Buttons text={'SIGN IN'} color={colors.primary} onClick={signinHandling}/>
            <Buttons text={'SIGN UP'} color={colors.secondary} onClick={signupHandling}/>
        </View>
    )
}

export default Landing;