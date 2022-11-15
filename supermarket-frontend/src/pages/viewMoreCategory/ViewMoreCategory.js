import { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, Text, View, Pressable } from "react-native";
import { colors, fonts } from "../../constants/palette";
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
                const allCategories = await sendRequest({method:"get",data:"636ef8497eb94fe486471d25",route:`${baseUrl.BASE_URL}/category/all`})
                setCategories(allCategories.category)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return <View style={styles.pageContainer}>
        <View style={styles.iconContainer}>
            <Pressable>
                <FontAwesome name="sort-amount-asc" size={fonts.iconSize} color={colors.primary} />
            </Pressable>
        </View>
        <ScrollView>
            <View style={styles.itemContainer} >
        {categories.map((item) => { 
            return (
                    <Categories key={item._id} label={item.category} imageUrl={item.image} width={135} height={135} onClick={()=> navigation.navigate('ViewMoreItem')}/>
                    )
                })}
            </View>
        </ScrollView>
    </View>
}

export default ViewMoreCategory;