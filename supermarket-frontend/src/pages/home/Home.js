import { Text, View } from "react-native";
import Categories from "../../components/Categories/Categories";

const Home = () => {
    return <>
    <View>
        <View>
            <Text>All Categories</Text>
        </View>
        <Categories label={'Fruits'} imageURL={require('../../../assets/images/landing.png')}/>

    </View>
    </>
}

export default Home;