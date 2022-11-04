import {Text, View, Image } from "react-native";

const Barcode = (props) => {
    return <View>
        <Image source={require('../../../assets/images/Barcode.jpg')}/>
        <Text>{props.number}</Text>
    </View>
}

export default Barcode;