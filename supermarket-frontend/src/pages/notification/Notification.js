import { ScrollView} from "react-native";
import SingleNotification from "../../components/SingleNotification/SingleNotification";

const Notification = () => {
    return <ScrollView>
        <SingleNotification notification={"test notification"}/>
    </ScrollView>
}

export default Notification;