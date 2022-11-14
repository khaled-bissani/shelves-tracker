import { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PressableText from "../PressableText/PressableText";
import SingleItem from "../SingleItem/SingleItem";
import styles from "./styles";
import sendRequest from "../../utils/axios";
import baseUrl from "../../../config/env";

const SingleCategory = (props) => {

    const navigation= useNavigation();

    const [ products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                // Fetching all the products
                const value ={
                    id:"636ef8497eb94fe486471d25",
                    category:"Fruits"
                }
                const allProducts = await sendRequest({method:"post" ,data:value,route:`${baseUrl.BASE_URL}/product/all`})
                setProducts(allProducts[0].products)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])   

    return <View style={styles.singleCategoryContainer}>
        <View style={styles.singleCategoryTitleContainer}>
            <Text style={styles.singleCtegoryTitle}>{props.categoryTitle}</Text>
            <PressableText onClick={()=>navigation.navigate('ViewMoreItem')} text={'view more'} textColor={'#545454'} fontSize={12}/>
        </View>
        <ScrollView horizontal={true}>
            {products.map((item)=>{
                    return (
                        <View key={item._id} style={styles.singleItemContainer}>
                            <SingleItem onClick={()=>navigation.navigate('SingleItemView')} label={item.product_name} quantity={item.quantity_shelf} width={130} height={130}/>
                        </View>
                    )
                })}
        </ScrollView>
    </View>
}

export default SingleCategory;