import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/palette';

const MenuButton = (props) => {
    return <Pressable onPress={props.onPress}>
            <Ionicons name='menu' size={36} color={colors.white} />
        </Pressable>
}

export default MenuButton;