import { Text, View } from "react-native";
import Categories from "../../components/Categories/Categories";

const Home = () => {
    return <>
    <View>
        <View>
            <Text>All Categories</Text>
        </View>
        <Categories label={'Fruits'}/>

    </View>
    </>
}

export default Home;