import { ScrollView, Text, View } from "react-native";

const ChatMessage = () => {
    return <View>
        <ScrollView>
            <View>
                <Text>Name</Text>
                <Text>Message</Text>
                <Text>Time</Text>
            </View>
        </ScrollView>
        <View></View>
    </View>
}

export default ChatMessage;