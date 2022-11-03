import { ScrollView, Text, View } from "react-native";
import styles from "./styles";

const ChatMessage = () => {
    return <View style={styles.pageContainer}>
        <ScrollView>
            <View style={styles.messageContainer}>
                <Text style={styles.name}>Name</Text>
                <View style={styles.messageBox}>
                    <Text style={styles.message}>Message</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={styles.time}>Time</Text>
                </View>
            </View>
        </ScrollView>
        <View style={styles.footerContainer}></View>
    </View>
}

export default ChatMessage;