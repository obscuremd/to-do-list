import React, { useState } from 'react'
import TodoList from './TodoList'
import AddIcon from '@mui/icons-material/Add';

function Todo() {
    const [newItem, setNewItem] =useState("")
    const [items, setItems] = useState([])
    
    const addItem = () =>{

        if(newItem === ""){
            alert("Please input something")
            return
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem
        }

        setItems(oldList => [...oldList, item])
        setNewItem("");

    }

    const deleteItem = (id) => {
        setItems(oldList => oldList.filter(item => item.id !== id));
      }


  return (
    <div className='w-screen h-screen bg-slate-900 flex flex-col justify-center items-center'>
        <div className='w-[50vh] h-[90vh] bg-[#f0d6b3] rounded-[50px] flex flex-col justify-center items-center ' >
            <h2 className='font-[Righteous] h-[30px] w-[50vh] shadow-lg flex justify-center items-center bg-transparent mb-[20px] text-[#4a3695] text-sm'>TO-DO LIST</h2>
            <p className='font-[Righteous] text-[#4a3695]' >WHATS THE PLAN FOR TODAY</p>
            <div>
                <div className='flex w-[300px] h-[50px]  bg-[#e5c8a8]  rounded-[50px] justify-center items-center pl-[20px] pr-[10px]'>
                    <input 
                        className='font-[JosefinSans] flex-1 bg-inherit outline-none'
                        type="text" 
                        placeholder='input a to-do'
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                        />
                    <button onClick={addItem} 
                            className='font-[Righteous] bg-[#86482462] w-[40px] h-[40px] rounded-[50%] ml-[0px]'
                    ><AddIcon/></button>
                </div>
                <div className='h-[70vh] w-[40vh] overflow-y-scroll flex flex-col items-center pt-[50px] gap-[10px]'>
                    {items.map(item => (
                        <TodoList
                            key = {item.id}
                            list = {item.value}
                            id={item.id}
                            onDelete={deleteItem}
                        />
                    ))}
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Todo
