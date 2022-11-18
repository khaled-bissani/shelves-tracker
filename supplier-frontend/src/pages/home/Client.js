import React, {useState, useEffect} from 'react'
import Button from '../../components/Button'
import SideBar from '../../components/SideBar'
import TableHeader from '../../components/TableHeader'
import TableRow from '../../components/TableRow'
import Title from '../../components/Title'
import sendRequest from '../../utils/axios'

const Client = () => {

    const [user, setUser] = useState([])
    const [optionSelected, setOptionSelected] = useState()
    const [displayed, setdisplayed] = useState([])

    const handleAdd = () =>{
        console.log(user[0]._id)
        for (let singleUser = 0; singleUser < user.length; singleUser++) {
            const id = user[singleUser]._id;
            if (id===optionSelected){
                setdisplayed(current =>[...current, {id:user[singleUser]._id, full_name:user[singleUser].full_name, email:user[singleUser].email, image:user[singleUser].picture}])
            }
            
        }
        console.log(displayed)
        
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

    const handleSelectChange = (e) => {
        setOptionSelected(e.target.value);
      };
    
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

    useEffect(() => {
      console.log(optionSelected)
    }, [optionSelected])
    

  return (
    <div className='flex'>
        <SideBar/>
        <div className='flex flex-col justify-between mt-[90px] mb-[60px] mx-[100px]'>
            <Title title={"Client"}/>
            <div className='flex flex-col justify-between w-[900px] h-[420px]'>
                <div className='flex justify-between w-full'>
                    <select className='border border-black' value={optionSelected} onChange={handleSelectChange}>
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
                        {displayed.map((item)=>{
                            return(<TableRow key={item.id} image={item.image} column1Placeholder={"Client Name"} column1Value={item.full_name} column2Placeholder={"Client Email"} column2Value={item.email} editable={false}/>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Client