import React from 'react'
import { Container,PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8 h-screen bg-[#f5cba1]'>
        <Container>
            <PostForm/>
        </Container>
    </div>
  )
}

export default AddPost