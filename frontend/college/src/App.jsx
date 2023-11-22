import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './login/Login.jsx'
import Mainpage from './componets/Mainpage.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Suboodh from './componets/suboodh.jsx';
import Profileofuser from './component2/profileuser.jsx'
import Orginpage from './component2/Originalpage.jsx'
import Chatapp from './component2/chatapp.jsx'
function App() {


  return(
    <>

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/chat/:id' element={<Chatapp/>}/>
      <Route path='/Mainpage' element= {<Mainpage/>}/> 
      <Route path='/suboodh' element={<Suboodh/>}/>
      <Route path='/origin' element={<Orginpage/>}/>
      <Route path='/origin/:username' element={<Profileofuser/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )

  
}

export default App
