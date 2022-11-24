import {Text, View, Image } from "react-native";
import styles from "./styles";

const Barcode = (props) => {
    return <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/images/Barcode.jpg')}/>
        <Text style={styles.text}>{props.number}</Text>
    </View>
}

export default Barcode;