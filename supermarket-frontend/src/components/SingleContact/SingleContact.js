import { Image, Text, View } from "react-native";
import styles from "./styles";

const SingleContact = (props) => {
    return <View style={styles.singleContactContainer}>
        <View style={styles.singleContactImageContainer}>
            <Image style={styles.singleContactImage} source={props.imageURL}/>
        </View>
        <View style={styles.singleContactNameContainer}>
            <Text style={styles.singleContactName}>{props.name}</Text>
            <Text style={styles.singleContactMessage}>{props.message}</Text>
        </View>
    </View>
}

export default SingleContact;