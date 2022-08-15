import React from 'react'
import {BsThreeDotsVertical,BsArrowUp,BsArrowDown} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { data } from './data'
const CropData = ({item}) => {return(data.map((item)=> {return(<div key={item.id} className='flex justify-between my-6'>
<Link to={'/crop_p'}><p className='text-[#75A843] font-bold'>{item.crop}</p></Link>
<div className='flex space-x-36 text-[#888888] text-lg'>
    <p>{item.year}</p>
    <p>{item.version}</p>
    <BsThreeDotsVertical size={25}/>
</div>
</div>)}))
    
  
}

export default CropData