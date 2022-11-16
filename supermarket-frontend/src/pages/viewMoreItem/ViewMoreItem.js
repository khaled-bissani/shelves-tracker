import { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, Text, View, Pressable } from "react-native";
import { colors, fonts } from "../../constants/palette";
import SingleItem from "../../components/SingleItem/SingleItem";
import styles from "./styles";
import sendRequest from "../../utils/axios";
import baseUrl from "../../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ViewMoreItem = ({navigation, route}) => {

    const categoryId = route.params.categoryId
    const categoryName = route.params.categoryName

    const [userId, setUserId] = useState("");
    const [ products, setProducts] = useState([]);

    AsyncStorage.getItem('userId').then((value)=>setUserId(value))

    const value ={
        id: userId,
        category: categoryName
    }

    useEffect(() => {
        const fetchData = async() => {
            try {
                // Fetching all the products
                const allProducts = await sendRequest({method:"post" ,data:value,route:`${baseUrl.BASE_URL}/product/all`})
                setProducts(allProducts[0].products)
            } catch (error) {
                console.log(error)
            }
        }
        if(userId.length>0){
            fetchData()
        }
    }, [userId]) 

    return <View style={styles.pageContainer}>
        <View style={styles.iconContainer}>
            <Pressable>
                <FontAwesome name="sort-amount-asc" size={fonts.iconSize} color={colors.primary} />
            </Pressable>
        </View>
        <ScrollView>
            <View style={styles.itemContainer}>
        {products.map((item)=>{
            return (
                    <SingleItem key={item._id} label={item.product_name} quantity={item.quantity_shelf} imageUrl={item.image} width={135} height={135} onClick={()=>navigation.navigate('SingleItemView', {
                                productId: item._id,
                                productName: item.product_name,
                                productQuantity: item.quantity_shelf,
                                productImage: item.image,
                                productExpiryDate: item.expiry_date
                                })}/>
                                )
                            })}
            </View>
        </ScrollView>
    </View>
}

export default ViewMoreItem;