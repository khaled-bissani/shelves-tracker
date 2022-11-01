import { ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SingleContact from "../../components/SingleContact/SingleContact";

const Chat = () => {

    const navigation = useNavigation();

    return <ScrollView>
        <SingleContact onClick={()=>navigation.navigate('ChatMessage')} imageURL={''} name={'Name'} message={'Last message'}/>
    </ScrollView>
}

export default Chat;