 import './chatapp.css'
 import axios from 'axios';
 import { useEffect,useState } from 'react';
 import { Link,useParams} from 'react-router-dom';
 import { io } from "socket.io-client";
 
 function Chatapp(){
    let { id } = useParams();
   const socket = io.connect("http://localhost");
    const [ans,setans]=useState([]);
    const [originaluser,setoriginalusers]=useState([]);
    const [allmessage,setallmessage]=useState([]);
    const [kyalikheho,setkyalikheho]=useState("");
    const [currentladka,setcurrentladka]=useState("");
  async function gettheralluserorigin() {
    let token=localStorage.getItem("token")
  const ans = await axios.get("http://localhost/origin",{
    headers:{
    authorization: 'Bearer'+ " " + token  }
  });
//   console.log(ans);
  setoriginalusers(ans.data.totalusers);
  setcurrentladka(ans.data.currentusers.name)
  

 }
 async function getallthemessages(){
    let tokenbro=localStorage.getItem('token');
    console.log(tokenbro);
   let messages= await axios.post("http://localhost/chating",{
        token: tokenbro,
        to:id
    },{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }});
    console.log("This is"  );
    console.log(messages)
    setallmessage(messages.data);
 }
useEffect(()=>{
gettheralluserorigin();
getallthemessages();
},[],[allmessage]);

async function handlemessagesend(){
let data={
    message:kyalikheho,
    sender:currentladka,
    reciver:id,
}
    socket.emit('message',data);
    let token=localStorage.getItem('token')
    if (kyalikheho==null){
        return;
    }
      const ans= await axios.post("http://localhost/chat",{
        sender:token,
        reciver:id,
        message:kyalikheho
      },{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }});
        console.log(ans.data);
        setkyalikheho("");

}


useEffect(()=>{
    
    socket.on('connect',(socket)=>{
        console.log("connected");
    })
    socket.on('message', async (data) => {
        console.log(data);
        
        if(data.sender==currentladka && data.reciver==id){
            if(data.sender==currentladka){
            setans({currentperson:true,
                message:data.message
            });
        
        }
        else{
            setans({currentperson:false,
                message:data.message
            })
        }
            setallmessage(
                [...allmessage,ans]);
                console.log(allmessage);
        }
      });
},[]);








return (<>
<div className="chattingkro">
    <div className="chatsetter">
        <div className="chatsetterleft">
            <div>
                <h2>Edustage</h2>
            </div>
            {originaluser.map((e)=>{
                return(
<Link to={'/chat/'+ e.name} >
 <div className='alsochat'>
 <img src='https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png'></img>
<div>
<p> {e.name}</p> 
</div>

</div>
</Link>   )

            })
            
            }
            
           
        </div>
        <div className="chatsetterright">
<div className="chatsetterrighttop">
<div><img src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png" alt="" /></div>
<div>   <h5>{id}</h5>    </div>

</div>

<div className="chatindbox">
{
    allmessage.map((e)=>{
        return(
            <>
            <div className={e.currentperson ? "allthemessageother":"allthemessageown"}>
                <img src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png" alt="" />
              <p> {e.message} </p>
            </div>
            </>
        )
    })

}
</div>
<div className="chatmessagesender">

<input type="text"  value={kyalikheho} onChange={(e)=>{
    
    setkyalikheho(e.target.value);
}}/>
<button onClick={handlemessagesend}>Send</button>
</div>

        </div>
    </div>
</div>
</>)

 }
export default Chatapp