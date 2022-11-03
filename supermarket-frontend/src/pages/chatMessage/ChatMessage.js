import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TextInput, View, Pressable } from "react-native";
import { colors, fonts } from "../../constants/palette";
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
            <TextInput keyboardType={'default'} style={styles.textInput}/>
            <Pressable android_ripple={{color: '#ddd'}} style={({pressed}) => pressed && styles.pressedItem}>
                <Ionicons name="send" color={colors.white} size={fonts.iconSize}/>
            </Pressable>
        </View>
    </View>
}

export default ChatMessage;