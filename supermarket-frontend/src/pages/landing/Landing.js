import { Image, Text, View } from "react-native";
import styles from "./styles";

const Landing = () => {
    return(
        <View style={styles.landingContainer}>
            <Image source={require('../../../assets/images/landing.png')} style={styles.image}/>
            <Text style={styles.titleText}>Shelves Tracker</Text>
        </View>
    )
}

export default Landing;