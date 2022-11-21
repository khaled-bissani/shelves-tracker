import { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import Categories from "../../components/Categories/Categories";
import sendRequest from "../../utils/axios";
import baseUrl from "../../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ViewMoreCategory = ({navigation}) => {

    const [categories, setCategories] = useState([]);
    const [userId, setUserId] = useState("");

    AsyncStorage.getItem('userId').then((value)=> setUserId(value));

    useEffect(() => {
        const fetchData = async() => {
            try {
                // Fetching all the categories
                const allCategories = await sendRequest({method:"post",data:{id:userId},route:`${baseUrl.BASE_URL}/category/all`})
                setCategories(allCategories.category)
            } catch (error) {
                console.log(error)
            }
        }
        if(userId.length>0){
            fetchData()
        }
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