import React from 'react'
import {useDispatch} from 'react-redux' 
import authService from'../../Appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch() ; 
    const logoutHandler = ()=>{
        authService.logout() 
        .then(()=>{
            dispatch(logout())
        })
    }
  return (
<button className='inline-bock px-6 py-2 duration-200 hover:bg-[#d59554] text-white font-bold font-serif text-base
                      rounded-xl'
    onClick={logoutHandler}>
Logout
</button>
  )
}

export default LogoutBtn