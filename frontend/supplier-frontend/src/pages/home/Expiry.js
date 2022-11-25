import React, {useState, useEffect} from 'react'
import SideBar from '../../components/SideBar'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import TableHeader from '../../components/TableHeader'
import Title from '../../components/Title'
import Popup from 'reactjs-popup'
import TextInput from '../../components/TextInput'
import sendRequest from '../../utils/axios'
import ExpiryRow from '../../components/ExpiryRow'

const Expiry = () => {

    const userId = localStorage.getItem("userId")
    const supplierName = localStorage.getItem("supplierName")
    const [allProducts, setAllProducts] = useState([])
    const [selectedRow, setSelectedRow] = useState()
    const [categoryId, setCategoryId] = useState()
    const [product, setProduct] = useState({
        product_name:"",
        quantity_shelf:"",
        expiry_date:"",
        image:"",
        barcode:"",
        category:"supplier",
        id:userId
    })

    const addProduct = async() => {
        try {
            const products = await sendRequest({method:"post",data:product,route:`${process.env.REACT_APP_BASE_URL}/product/add`})
            setProduct({
                product_name:"",
                quantity_shelf:"",
                expiry_date:"",
            })
        } catch (error) {
            console.log(error)
        }
    }    

    const handleChange=(e,feild)=> {
        setProduct({
          ...product, [`${feild}`]: e.target.value
        });
      }

    const handleDelete = async() =>{
        try {
            const deleteProduct = await sendRequest({method:"post" ,data:{"id":userId,"category_id":categoryId,"product_name":selectedRow} ,route:`${process.env.REACT_APP_BASE_URL}/product/delete`})
            console.log(deleteProduct)
        } catch (error) {
            console.log(error)
        }
    }
    
    const data={
        id:userId,
        category:"supplier"
    }

    useEffect(() => {
        const fetchData = async() => {
            try {
                // Fetching all the products
                const allProduct = await sendRequest({method:"post" ,data:data ,route:`${process.env.REACT_APP_BASE_URL}/product/all`})
                setAllProducts(allProduct[0].products)
                // Getting the main category id
                const category_id = await sendRequest({method:"post" ,data:data ,route:`${process.env.REACT_APP_BASE_URL}/category/all`})
                setCategoryId(category_id.category[0]._id)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])  


  return (
    <div className='flex'>
        <SideBar supplierName={supplierName}/>
        <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
            <Title title={"Product"}/>
            <div className='flex flex-col justify-between w-[900px] h-[420px]'>
                <div className='flex justify-evenly w-full'>
                    <InputField placeholder={"Product Name"} value={selectedRow}/>
                    
                    <Popup contentStyle={{background: '#3AA346', width: '500px', height:'430px', borderRadius: '10px'}} position='center center' overlayStyle={{background: 'rgba(0,0,0,0.5)' }} modal={true} trigger={<Button bgColor="#6EDA79" width="170px" height="46px" name={"ADD"}/>} >
                    {close => (
                        <div>
                            <div className='flex justify-end mt-1 mr-6'>
                                <a className="close cursor-pointer text-[30px] rounded-full" onClick={close}>&times;</a>
                            </div>
                            <div className='flex flex-col items-center justify-evenly h-[370px]'>
                                <TextInput textColor={'white'} label={"Product Name"} type={"text"} placeholder={"Product Name"} value={product.product_name} onChange={(e)=>handleChange(e,"product_name")}/>
                                <TextInput textColor={'white'} label={"Product Quantity"} type={"text"} placeholder={"Product Quantity"} value={product.quantity_shelf} onChange={(e)=>handleChange(e,"quantity_shelf")}/>
                                <TextInput textColor={'white'} label={"Product Expiry Date"} type={"text"} placeholder={"yyyy-mm-dd"} value={product.expiry_date} onChange={(e)=>handleChange(e,"expiry_date")}/>
                                <Button bgColor="#6EDA79" width="300px" height="46px" name={"SAVE"} onClick={addProduct}/>
                            </div>
                        </div>
                    )}
                    </Popup>

                    <Button bgColor="#FF0000" width="170px" height="46px" opacity="0.7" name={"DELETE"} onClick={handleDelete}/>
                </div> 
                <div>
                    <TableHeader column1={"Product name"} column2={"Product quantity"} column3={"Expiry date"} />
                    <div className='h-[300px] bg-[#D9D9D9] overflow-auto'>
                        {allProducts.map((item)=>{
                            return(<ExpiryRow key={item._id}  productName={item.product_name} productQuantity={item.quantity_shelf} productExpiry={item.expiry_date} onClick={()=>setSelectedRow(item.product_name)}/>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expiry