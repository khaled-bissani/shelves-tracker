import React, {useState, useEffect} from 'react'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import SideBar from '../../components/SideBar'
import TableHeader from '../../components/TableHeader'
import TableRow from '../../components/TableRow'
import Title from '../../components/Title'
import sendRequest from '../../utils/axios'

const Client = () => {

    const[name,setName]=useState('')

    const [user, setUser] = useState([])

    const handleChange=(e)=> {
        setName(e.target.value);
    }

    const handleAdd = () =>{
        console.log('Add')
    }

    const handleEdit = () =>{
        console.log('Edit')
    }
    const handleDelete = () =>{
        console.log('Delete')
    }

    const handleChat = () =>{
        console.log('Chat')
    }

    useEffect(() => {
        const fetchData = async() => {
            try {
                const users = await sendRequest({method:"post",data:{"user_type":"Supermarket"},route:`${process.env.REACT_APP_BASE_URL}/client/all`})
                setUser(users)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

  return (
    <div className='flex'>
        <SideBar/>
        <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
            <Title title={"Client"}/>
            <div className='flex flex-col justify-between w-[900px] h-[420px]'>
                <div className='flex justify-between w-full'>
                    <select>
                        <option>User</option>
                        {user.map((item)=>{
                            return (<option key={item._id} value={item._id}>{item.full_name}</option>)
                        })} 
                    </select>
                    <Button bgColor="#3AA346" width="170px" height="46px" name={"ADD"} onClick={handleAdd}/>
                    <Button bgColor="#6EDA79" width="170px" height="46px" name={"EDIT"} onClick={handleEdit}/>
                    <Button bgColor="#FF0000" width="170px" height="46px" opacity="0.7" name={"DELETE"} onClick={handleDelete}/>
                    <Button bgColor="#3AA346" width="170px" height="46px" name={"CHAT"} onClick={handleChat}/>
                </div> 
                <div>
                    <TableHeader column1={"Client photo"} column2={"Client name"} column3={"Client email"} />
                    <div className='h-[300px] bg-[#D9D9D9] overflow-auto'>
                        <TableRow/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Client