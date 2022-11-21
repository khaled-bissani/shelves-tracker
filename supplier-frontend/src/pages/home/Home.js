import React from 'react'
import SideBar from '../../components/SideBar'
import Title from '../../components/Title'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
  {name: 'Monday', uv: 400}, 
  {name: 'Tuesday', uv: 300},
  {name: 'Wednesday', uv: 500},
  {name: 'Thursday', uv: 100},
  {name: 'Friday', uv: 450},
  {name: 'Saturday', uv: 300},
  {name: 'Sunday', uv: 350}];

const Home = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
        <Title title={"Dashboard"}/>
        <div className='flex flex-row justify-evenly items-center w-[900px] h-[120px] bg-[#D9D9D9]'>
          <div className='flex flex-col justify-between h-[80px]'>
            <p>Number of Client</p>
            <p className='text-center font-bold text-[26px]'>Number</p>
          </div>
          <div className='h-[100px] border border-black'></div>
          <div className='flex flex-col justify-between h-[80px]'>
            <p>Number of Product</p>
            <p className='text-center font-bold text-[26px]'>Number</p>
          </div>
          <div className='h-[100px] border border-black'></div>
          <div className='flex flex-col justify-between h-[80px]'>
            <p>First Item to expire</p>
            <p className='text-center font-bold text-[26px]'>Number</p>
          </div>
        </div>
          <div className='flex-col justify-center items-center w-[900px] h-[280px] bg-[#D9D9D9]'>
            <p className='text-center'>Waste products per Week</p>
            <BarChart width={850} height={250} data={data} className='mt-11'>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={100} wrapperStyle={{ top: 0, right: 0, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="uv" fill="#8884d8" barSize={30} />
            </BarChart>
          </div>
      </div>
    </div>
  )
}

export default Home