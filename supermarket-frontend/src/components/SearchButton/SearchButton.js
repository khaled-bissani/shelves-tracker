import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { fonts } from "../../constants/palette";
import styles from "./styles";

const SearchButton = (props) => {
    return <Pressable onPress={props.onPress} style={styles.buttonContainer}>
            <Ionicons name='search-outline' size={fonts.iconSize} color={props.color}/>
        </Pressable>
}

export default SearchButton;