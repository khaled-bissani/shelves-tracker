import { Image, View } from "react-native";
import styles from "./styles";

const Landing = () => {
    return(
        <View style={styles.landingContainer}>
            <Image source={require('../../../assets/images/landing.png')} style={styles.image}/>
        </View>
    )
}

export default Landing;