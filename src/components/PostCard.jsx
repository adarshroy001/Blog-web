import React from 'react'
import service from '../Appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id , title , featuredImage}) {
  return (
   <Link to={`/post/${$id}`}>
      <div className='w-full bg-orange-400 rounded-xl p-0 h-[28rem]'>
         <div className='w-full justify-center mb-1 h-[23rem] '>
            <img src={service.getFilePreview(featuredImage)} alt= {title} className='rounded-xl h-[23rem] w-full object-fill'/>
         </div>
         <h2
         className='text-base font-bold text-center text-white text-wrap mt-5'
         >{title}</h2>
      </div>
   </Link>
  )
}

export default PostCard