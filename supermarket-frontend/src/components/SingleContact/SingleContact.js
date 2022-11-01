import { Image, Text, View } from "react-native";
import styles from "./styles";

const SingleContact = () => {
    return <View style={styles.singleContactContainer}>
        <View style={styles.singleContactImageContainer}>
            <Image style={styles.singleContactImage} source={''}/>
        </View>
        <View style={styles.singleContactNameContainer}>
            <Text style={styles.singleContactName}>Name</Text>
            <Text style={styles.singleContactMessage}>Last message</Text>
        </View>
    </View>
}

export default SingleContact;