import React from 'react'

import Home1 from "../components/Home1"
import Home2 from "../components/Home2"
import { useSelector } from 'react-redux'

function Home()
 {
    const status=useSelector((state)=>(state.auth.status));
    
    
  if(status){
    return <>
        <Home2/>
    </>
  }
  else{
    return <>
    
    <Home1/>
    </>
  }
}

export default Home

