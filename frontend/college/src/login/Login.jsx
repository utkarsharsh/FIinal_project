import { useState } from "react"
import './login.css'

function Login(){

    const [ valuelogin ,setvaluelogin ]=useState("Signin");

return(

<>

<div className="loginavbar">
    <div className="loginnavbarlogo">

    </div>
<div className="loginwriting">

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

<input type='username' placeholder="Username">

</input>

<input type='email' placeholder="Your email" >

</input>
<input   type='password' placeholder="Password"  >

</input>
<p>Already have accout ? <br /> sigin</p>
</div>
<button>SignIn</button>
</div>
</div>

</div>



</>



)



}
export default Login 