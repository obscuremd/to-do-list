import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';

function TodoList({list, id, onDelete }) {

    const deleteItem = () => {
        onDelete(id);
      }

  return (
    <ul className='w-[35vh] max-h-[50px] bg-[#86482462] flex gap-[20px] rounded-[50px] justify-between items-center  '>
        <li className='font-[JosefinSans] font-semibold pl-[20px] overflow-x-scroll pt-[5%] text-sm text-[#ffffff9c]'>{list}</li>
        <div
            onClick= {deleteItem}
            className=' max-h-[30px] max-w-[30px] flex justify-center items-center rounded-[50%] cursor-pointer relative left-[5px]'>
              <CancelIcon 
              fontSize="large"
              sx={{ color: '#864824' }}/>
            </div>
    </ul>
  )
}

export default TodoList