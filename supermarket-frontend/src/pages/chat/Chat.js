import { ScrollView} from "react-native";
import SingleContact from "../../components/SingleContact/SingleContact";

const Chat = () => {
    return <ScrollView>
        <SingleContact imageURL={''} name={'Name'} message={'Last message'}/>
    </ScrollView>
}

export default Chat;