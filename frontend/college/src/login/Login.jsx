import { useState } from "react"
import { useNavigate } from 'react-router-dom';

import axios from 'axios'
import './login.css'

function Login(){
    const navigate = useNavigate();
   
// general work
    const [ valuelogin ,setvaluelogin ]=useState("SignIn");
const [Login,setlogin]=useState(false);
function signwhat(){
    if(!Login){
setlogin(true);
setvaluelogin("signup");}
else{
    setlogin(false);
    setvaluelogin("signIn") 
}

}
// setting the value of input 
const [uservalues ,setuservalues]=useState({name:"",password:"",useroriginalname:""});
function handleloginchange (e){
   let a=e.target.name;
 let b=e.target.value;
 
setuservalues((pre)=>{
    return(
        {
          ...pre,
          [a]:b  
    }
    )
})

}
async function handlesignupapi(){
    // e.preventdefault();
console.log(uservalues);
    let check= await axios.post('http://localhost:80/submit',{
        useroriginalname: uservalues.useroriginalname,
        name:uservalues.name,
        password:uservalues.password
    }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    let q=false;
    console.log(check);
    if(check.status==200){
localStorage.setItem("token",check.data);  
q=true;
navigate('/Mainpage');
}
     
        else    alert((await check).data);
      
       
}

async function handlesigninapi(){
    // e.preventdefault();
console.log(uservalues);
    let check= await axios.post('http://localhost:80/login',{
        useroriginalname: uservalues.useroriginalname,
        name:uservalues.name,
        password:uservalues.password
    }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    console.log((await check).status);
let q=false;
    if(check.status==200){
localStorage.setItem("token",check.data);  
q=true;
navigate('/Mainpage');
}     
        else  {alert((await check).data);}
       

}





return(

<>

<div className="loginavbar">
    <div className="loginnavbarlogo" >
<h1 style={{color:"white"}}><span style={{color:"black"}}>Lo</span>go</h1>
    </div>



</div>

<div className="outerloginpage">





<div className="innerloginpage">
<div className="leftlogin">

</div>
<div className="rightlogin">
    <div className="welcome">
       <h1>welcome</h1>
    </div>
<div className="rightlogininner">

<input type='username' placeholder="Username" style={Login ? {display:"none"}:{display:"block"}} name="useroriginalname" value={uservalues.useroriginalname} onChange={handleloginchange}>

</input>

<input type='email' placeholder="Your email" name="name" value={uservalues.name} onChange={handleloginchange}>

</input>
<input   type='password' placeholder="Password" name="password" value={uservalues.password} onChange={handleloginchange}>

</input>
<div className="logincontrol">
<p style={Login ? {display:"none"}:{display:"block"}}>Already have accout ? </p>
<span style={{marginTop:"0px"}} onClick={signwhat}>{valuelogin}</span>
</div>
</div>
<button style={Login ? {display:"block"}:{display:"none"}} onClick={handlesigninapi}>SignIn</button>
<button style={Login ? {display:"none"}:{display:"block"}} onClick={handlesignupapi}>SighUp</button>
</div>
</div>

</div>



</>



)



}
export default Login 