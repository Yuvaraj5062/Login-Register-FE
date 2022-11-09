import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        console.log("cal")
        localStorage.clear()
        navigate('/')
    },[])
  return (
    <></>
  )
}

export default Logout