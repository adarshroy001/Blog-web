import { useState ,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './Appwrite/auth'
import { login,logout } from './store/authSlice' 
import './App.css'
import { Footer ,Headers } from './components'
import { Outlet } from 'react-router-dom'

function App() {  
 const [loading , setLoading] = useState(true) 
 const dispatch = useDispatch() ;
 useEffect(()=>{
  authService.getCurrentUser()
  .then(
    (userData)=>{
      if (userData) {
       dispatch(login({userData}))
      }else{
        dispatch(logout()) ;
      }
    }
  )
  .finally(()=>setLoading(false))
 },[])
  return ( !loading?
   <div className='min-h-screen flex flex-wrap content-between bg-gray-500 m-0'>
       
      <div className='w-full block '>
         <Headers/>
         <main>
         TODO:  <Outlet />
         </main>
         <Footer/>
      </div>
   </div>
  : null)

  
}

export default App
 