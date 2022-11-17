import { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import Categories from "../../components/Categories/Categories";
import sendRequest from "../../utils/axios";
import baseUrl from "../../../config/env";

const ViewMoreCategory = ({navigation}) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                // Fetching all the categories
                const allCategories = await sendRequest({method:"post",data:"636ef8497eb94fe486471d25",route:`${baseUrl.BASE_URL}/category/all`})
                setCategories(allCategories.category)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return <View style={styles.pageContainer}>
        <View style={styles.iconContainer}>
        </View>
        <ScrollView>
            <View style={styles.itemContainer} >
        {categories.map((item) => { 
            return (
                    <Categories key={item._id} label={item.category} imageUrl={item.image} width={135} height={135} onClick={()=> navigation.navigate('ViewMoreItem', {
                        categoryId: item._id,
                        categoryName: item.category
                    })}/>
                    )
                })}
            </View>
        </ScrollView>
    </View>
}

export default ViewMoreCategory;