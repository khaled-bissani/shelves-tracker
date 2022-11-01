import { Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Categories from "../../components/Categories/Categories";
import PressableText from "../../components/PressableText/PressableText";
import SingleCategory from "../../components/SingleCategory/SingleCategory";

const Home = () => {

    const navigation = useNavigation();

    return <>
    <View style={styles.homeContainer}>
        <View style={styles.mainTitleContainer}>
            <Text style={styles.allCategoriesTitle}>All Categories</Text>
            <PressableText onClick={()=> navigation.navigate('ViewMoreCategory')} text={'view more'} textColor={'#545454'} fontSize={12} />
        </View>
        <ScrollView horizontal={true}>
            <View style={styles.categoriesContainer}>
                <Categories label={'Fruits'} imageURL={require('../../../assets/images/landing.png')}/>
                </View>
        </ScrollView>
        <SingleCategory categoryTitle={"Fruits"}/>
    </View>
    </>
}

export default Home;