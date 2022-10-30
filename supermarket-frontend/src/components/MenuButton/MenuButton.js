import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/palette';
import styles from "./styles";

const MenuButton = (props) => {
    return <Pressable onPress={props.onPress} style={styles.buttonContainer}>
            <Ionicons name='menu' size={36} style={styles.icon} />
        </Pressable>
}

export default MenuButton;