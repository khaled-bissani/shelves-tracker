import { Text, View } from "react-native";
import styles from "./styles";

const SingleNotification = (props) => {
    return <View style={styles.SingleNotificationContainer}>
        <Text style={styles.SingleNotification}>{props.notification}</Text>
    </View>
}

export default SingleNotification;