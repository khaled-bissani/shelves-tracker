import { Text, View } from "react-native";
import styles from "./styles";

const ChatBox = (props) => {
    return <View style={styles.messageContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <View style={styles.messageBox}>
            <Text style={styles.message}>{props.message}</Text>
        </View>
        <View style={styles.timeContainer}>
            <Text style={styles.time}>{props.time}</Text>
        </View>
    </View>
}

export default ChatBox;