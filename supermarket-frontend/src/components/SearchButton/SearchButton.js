import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { fonts } from "../../constants/palette";
import styles from "./styles";

const MenuButton = (props) => {
    return <Pressable onPress={props.onPress} style={styles.buttonContainer}>
            <Ionicons name='search-outline' size={fonts.iconSize} style={styles.icon}/>
        </Pressable>
}

export default MenuButton;