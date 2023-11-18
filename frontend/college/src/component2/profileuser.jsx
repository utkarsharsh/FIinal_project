
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood,faHouse,faMoneyBills,faMagnifyingGlass,faImage,faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './profileuser.css'

function Profileofuser(){

let arrayofimg=["https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
,"https://images.pexels.com/photos/1089855/pexels-photo-1089855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/108303/pexels-photo-108303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/794494/pexels-photo-794494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]

    const [menu1,setmenu1]= useState(false);
    function responseoriginalmenu1()
{
  if(menu1){
    setmenu1(false);
  }
  else
setmenu1(true);

}

const [originaluser,setoriginalusers]=useState([]);
  async function gettheralluserorigin() {
    let token=localStorage.getItem("token")
  const ans = await axios.get("http://localhost/origin",{
    headers:{
    authorization: 'Bearer'+ " " + token  }
  });
  console.log(ans);
  setoriginalusers(ans.data.totalusers);
  
 }
 useEffect(()=>{
    gettheralluserorigin();
      },[]);
      const[slide , setslide]=useState(0);
      useEffect(()=>{


      },[]);

      setTimeout(()=>{
        if(slide==3){
            setslide(0)
        }
        else setslide(slide+1);
        },10000)
        


    return(






    <><div className="tritop">
       <div className="orginnavbar">
        <div className="originalnavbar">
    <div  style={{marginLeft:"35px",justifyContent:"center",display:"flex",alignItems:"center"}}>
<h2 style={{fontSize:"1.7rem"}}> <span style={{color:"#4681f4"}}>Edu</span> <span style={{color:"#FF6C22",marginLeft:"-7px"}}>stage</span></h2> </div>
<div className="originsearch">

    <input type= "search" /><span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
</div>
<div className="originalnavbarprofileimgavatar">
    <p>Utkarsh upadhyay</p>
    <img src='https://cdn-icons-png.flaticon.com/512/2919/2919906.png'></img>
    <div className="responseoriginalmenu1"  onClick={responseoriginalmenu1} style={menu1 ? {display:"none"}:{display:"block"}}>
    <FontAwesomeIcon icon={faBars} />
    </div>
    <div className="responseoriginalmenu2" style={menu1 ? {display:"block"}:{display:"none"}} onClick={responseoriginalmenu1}>
    <FontAwesomeIcon icon={faXmark}  />
    </div>
</div>


</div>

      </div>
      <div className="profileofuserleftright">
<div className="profileofuserleft">
<div className="profileofuserleftcard">
    <img></img>
    <div></div>
</div>
<div className="profileofuserusers">
{originaluser.map((e)=>{ return (
  < >
  <div style= {{  marginTop: "6px",display:"flex",overflow:"auto",alignItems:"center",padding:"10px"}}>
  
  <img style={{borderRadius:"50%" }} src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/129-512.png"></img>
  <p style={{marginLeft:"14px",width:"150px",overflow:"hidden"}}> {e.name} </p> 
  <Link to= {e.name} style={ {}}>
<button style={{marginLeft:"9px",borderStyle:"none",backgroundColor:"blueviolet",color:"white",borderRadius:"6px",width:"55px"}}>Profile</button>
  </Link>
  </div>


  </>
 ) })}
</div>




</div>
<div className="profileofuserrighttop">
<div className="profileofuserright">
{arrayofimg.map((e,ind)=>{
return (
<img src={e} alt="" className={ind==slide ? "profileofuserrightimg":"profileofuserrightimg noprofileofuserrightimg"} />
)
})}
</div>

<div className="profileofuserrightinfo">
<div className="chat">
<div className="profileofuserrightavatar">
<div style={{borderRadius:"100%",border:"2px solid blueviolet",}}> <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/129-512.png" alt="m" style={{width:"100%",height:"100%",borderRadius:"100%"}} /></div>
</div>
<div className="profileofuserrightavatarinfo">
    <h2>Utkarsh upadhyay</h2>
    <p >AKGEC,Ghaziabad</p>
<button style={{zIndex:"1000"}}>  <div className="btnani"></div> Message</button>
</div>
<div className="profileofuserrightavatarinfodata">
<div>
    <img>
    
    </img>
</div>
</div>

</div>

</div>
</div>

</div>
</div>
    </>)
}
export default Profileofuser