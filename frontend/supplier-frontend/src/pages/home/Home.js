import React, { useState, useEffect} from 'react'
import SideBar from '../../components/SideBar'
import Title from '../../components/Title'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import DashboardHeader from '../../components/DashboardHeader';
import sendRequest from '../../utils/axios'

const Home = () => {

  const userId = {"id":localStorage.getItem("userId")}
  const supplierName = localStorage.getItem("supplierName")
  const [data, setData] = useState()
  const [client, setClient] = useState()
  const [product, setProduct] = useState()
  const [expiry, setExpiry] = useState()

  useEffect(() => {
    const fetchData = async() => {
      try {
          const clients = await sendRequest({method:"post",data:{"user_type":"Supermarket"},route:`${process.env.REACT_APP_BASE_URL}/client/total`})
          setClient(clients.total)
          const products = await sendRequest({method:"post",data:userId,route:`${process.env.REACT_APP_BASE_URL}/supplier/all`})
          setData(products.chartValue)
          setProduct(products.count)
          setExpiry(products.expire)
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
        <Title title={"Dashboard"}/>
        <div className='flex flex-row justify-evenly items-center w-[900px] h-[120px] bg-[#D9D9D9]'>
          <DashboardHeader text={"Number of Client"} value={client}/>
          <div className='h-[100px] border border-black'></div>
          <DashboardHeader text={"Number of Product"} value={product}/>
          <div className='h-[100px] border border-black'></div>
          <DashboardHeader text={"First Item to expire"} value={expiry}/>
        </div>
          <div className='flex-col justify-center items-center w-[900px] h-[280px] bg-[#D9D9D9]'>
            <p className='text-center mt-4'>Expiring products in the upcoming days</p> 
            <BarChart width={850} height={240} data={data} className='mt-11'>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={50} wrapperStyle={{ top: 0, right: 0, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="uv" fill="#6EDA79" barSize={30} />
            </BarChart>
          </div>
      </div>
    </div>
  )
}

export default Home