import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TextInput, View, Pressable } from "react-native";
import { colors, fonts } from "../../constants/palette";
import ChatBox from "../../components/ChatBox/ChatBox";
import styles from "./styles";

const ChatMessage = () => {
    return <View style={styles.pageContainer}>
        <ScrollView>
            <ChatBox name={'Name'} message={'Message'} time={'Time'}/>
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