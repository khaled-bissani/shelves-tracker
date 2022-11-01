import { Image, Text, View, Pressable } from "react-native";
import styles from "./styles";

const SingleContact = (props) => {
    return <Pressable android_ripple={{color: '#ddd'}} style={({pressed}) => pressed && styles.pressedItem}>
        <View style={styles.singleContactContainer}>
            <View style={styles.singleContactImageContainer}>
                <Image style={styles.singleContactImage} source={props.imageURL}/>
            </View>
            <View style={styles.singleContactNameContainer}>
                <Text style={styles.singleContactName}>{props.name}</Text>
                <Text style={styles.singleContactMessage}>{props.message}</Text>
            </View>
        </View>
    </Pressable>
}

export default SingleContact;