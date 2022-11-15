import { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Categories from "../../components/Categories/Categories";
import PressableText from "../../components/PressableText/PressableText";
import SingleCategory from "../../components/SingleCategory/SingleCategory";
import sendRequest from "../../utils/axios";
import baseUrl from "../../../config/env";

const Home = () => {

    const [categories, setCategories] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async() => {
            try {
                // Fetching all the categories
                const allCategories = await sendRequest({method:"get",data:"636ef8497eb94fe486471d25",route:`${baseUrl.BASE_URL}/category/all`})
                setCategories(allCategories.category)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return <ScrollView>
    <View style={styles.homeContainer}>
        <View style={styles.mainTitleContainer}>
            <Text style={styles.allCategoriesTitle}>All Categories</Text>
            <PressableText onClick={()=> navigation.navigate('ViewMoreCategory')} text={'view more'} textColor={'#545454'} fontSize={12} />
        </View>
        <ScrollView horizontal={true}>
                {categories.map((item) => {
                    return(
                        <View style={styles.categoriesContainer} key={item._id}>
                            <Categories onClick={()=> navigation.navigate('ViewMoreItem',{
                                categoryName: item.category
                            })} label={item.category} imageUrl={item.image} width={100} height={100}/>
                        </View>
                    )
                })}
        </ScrollView>
        {categories.map((item)=>{
            return (
                <SingleCategory key={item._id} categoryTitle={item.category}/>
            )
        })}
    </View>
    </ScrollView>
}

export default Home;