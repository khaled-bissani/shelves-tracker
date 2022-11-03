import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TextInput, View } from "react-native";
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
        <View style={styles.footerContainer}>
            <TextInput keyboardType={'default'}/>
            <Ionicons name="send"/>
        </View>
    </View>
}

export default ChatMessage;