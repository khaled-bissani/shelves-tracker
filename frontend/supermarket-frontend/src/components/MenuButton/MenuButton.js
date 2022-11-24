import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";

const MenuButton = (props) => {
    return <Pressable onPress={props.onPress} style={styles.buttonContainer}>
            <Ionicons name='menu-outline' size={26} style={styles.icon} />
        </Pressable>
}

export default MenuButton;