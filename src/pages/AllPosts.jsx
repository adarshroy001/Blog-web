import React, { useEffect, useState } from 'react'
import service from '../Appwrite/config'
import { Container, PostCard } from '../components'
 

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{

    },[]) 
service.getPosts([]).then((posts)=>{
  if(posts){
    setPosts(posts.documents)
  }
})


  return (
    <div className='w-full h-screen bg-[#f5cba1] py-8'>
     <Container>
        <div className='flex flex-wrap'>
            {posts.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post}/>
                </div>
            ))}
        </div>
     </Container>
    </div>
  )
}

export default AllPosts