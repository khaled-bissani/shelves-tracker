import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const MenuButton = (props) => {
    return <Pressable onPress={props.onPress}>
            <Ionicons name='search-outline' size={36} />
        </Pressable>
}

export default MenuButton;