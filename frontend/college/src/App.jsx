import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './login/Login.jsx'
import Mainpage from './componets/Mainpage.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Suboodh from './componets/suboodh.jsx'
function App() {
  return(
    <>

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/> 
      <Route path='/Mainpage' element= {<Mainpage/>}/> 
      <Route path='/suboodh' element={<Suboodh/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )

  
}

export default App
