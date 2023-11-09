import { Carousel } from 'react-responsive-carousel';
import './suboodh.css'
import aniimg from './R-removebg-preview.png'
import Suboodhreviews from './suboodhreviewcomponent';
import { faWeight } from '@fortawesome/free-solid-svg-icons';

function Suboodh(){


return(<>
<div className='suboodhoter'>


<div className="suboodhheader">
    
{/* <div className='left'>
        <img src= {aniimg}id='suboodhboy'/>
        
    </div> */}



    <div className="mid">
        <div className="check" style={{backgroundColor:""}}>
<div className="shuboodhnavbar">
    <div  style={{marginLeft:"35px",justifyContent:"center",display:"flex",alignItems:"center"}}>
<h2 style={{fontSize:"1.7rem"}}> <span style={{color:"#4681f4"}}>Edu</span> <span style={{color:"#FF6C22",marginLeft:"-7px"}}>stage</span></h2> </div>
<div className="suboodhdestination">
    <p>Ghaziabad, Delhi </p>
</div>
<div className="suboodhnavbarprofileimgavatar">
    <p>Utkarsh upadhyay</p>
    <img src='https://cdn-icons-png.flaticon.com/512/2919/2919906.png'></img>
</div>


</div>

{/* <div className='suboodhhouse'>
<h1>Suboodh House   <span>🛖 </span></h1>

 </div> */}






<div className="suboodhinfo">
    <div className="carousel">
    
<Carousel width={800}   transitionTime={2000}  >
<img src="https://content3.jdmagicbox.com/comp/bhubaneshwar/c2/0674px674.x674.180323215601.r1c2/catalogue/angels-boarding-girls-pg-bhubaneswar-bhubaneshwar-paying-guest-accommodations-8c6iytkpjy.jpg" alt="" />
<img src="https://imagecdn.99acres.com/media1/21937/11/438751606M-1691591238741.webp" alt="" />

<img src="https://img1.wsimg.com/isteam/ip/ccc21964-70b3-4ce5-a752-f49f743e2530/blob-fc9690e.png/:/rs=h:1000,cg:true,m"/>
</Carousel></div>
<div className="secondsectionofimage">
   

{/* <img src=''></img> */}</div>

</div>
<div className="suboodhnewinfofather">
<div className="suboodhnewinfo1">
<div className="suboodhnewinfo">
<h2 style={{color:"#FF6C22",fontSize:"2rem"}}>Suboodh  <span   style={{color:"#4681f4"}}>house</span> <span></span></h2>
<img src='https://th.bing.com/th/id/R.c4ab702c52fade33e3ecee2544842323?rik=VaWg1vIGhlagww&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fpi5%2fxna%2fpi5xnaLiB.png&ehk=iKDONeq%2faIXRj%2brohaUkq8UxDHglm86UJpowOMJlCMI%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'></img>
</div>

<p> Sachi Ghaziabad, Ghaziabad | <span>13 Years in Business</span>
<span style={{fontSize:"2rem"}}>  . </span> Top Star pg</p>

</div>
<div className="suboodhnewinfo2">
<button id='fillingfast'><div className="btnani"></div>Filling fast</button>

</div>
</div>

</div>
<div className="suboodhinforight">

<div className="pricesuboodhandyouracountmood">
    <div className="realdetail">
        <div className="rent">
    <p style={{fontSize:"1.4rem",fontWeight:"bolder"}}> Rent    </p>

    <p style={{display:"flex", alignItems:"center",justifyContent:"center" ,fontSize:"1.2rem",fontWeight:"bold"}}> 
   
 <div style={{
width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"green",color:"white", alignItems:"center",justifyContent:"center",display:"flex", marginRight:"6px"
}}> ✓ </div> 42,000/year</p>










     </div>
   
   <div className='Amenities'>
   <p style={{fontSize:"1.4rem",fontWeight:"bolder"}}>Amenities
</p>
    <p style={{display:"flex", alignItems:"center",justifyContent:"center",fontSize:"1.2rem",fontWeight:"bold"}}> 
   
 <div style={{
width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"green",color:"white", alignItems:"center",justifyContent:"center",display:"flex", marginRight:"6px"
}}> ✓ </div> Parking avaibility</p>
 <p style={{display:"flex", alignItems:"center",justifyContent:"center",fontSize:"1.2rem",fontWeight:"bold"}}> 
   
   <div style={{
  width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"green",color:"white", alignItems:"center",justifyContent:"center",display:"flex", marginRight:"6px", 
  }}> ✓ </div> Wifi avaibility</p>
<p style={{display:"flex", alignItems:"center",justifyContent:"center",fontSize:"1.2rem",fontWeight:"bold"}}> 
   
   <div style={{
  width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"green",color:"white", alignItems:"center",justifyContent:"center",display:"flex", marginRight:"6px"
  }}> ✓ </div> 
  Luggage Storage</p>
</div>
<div className="services">
    <p style={{fontSize:"1.4rem",fontWeight:"bolder"}}>Services</p>
<p style={{display:"flex", alignItems:"center",justifyContent:"center",fontSize:"1.2rem",fontWeight:"bold"}}> 
   
   <div style={{
  width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"green",color:"white", alignItems:"center",justifyContent:"center",display:"flex", marginRight:"6px"
  }}> ✓ </div> 
 
24 Hour Concierge/Help Desk</p>
</div>


</div>
<div className="yoursdetailforenquiry">
    <button id='schedulemetting'>
<p  style={{textAlign:"center"}}> Schedule meeting  <br /> fill and get an email about time</p></button>
<div className="yoursdetailforenquiryinput">
<input type="name"  name='name'  placeholder='Your name'  />
<input type="email" name='email'    placeholder='Your email' />
<input type="number" name="number"     placeholder='Contact number' />
<input style={{}} type='submit' id='yoursdetailforenquiryinputsubmit'/>
</div>



</div>
</div>

</div>


<div > <h1 style={{marginLeft:"30px", borderBottom:"2px dotted green"}}>Reviews</h1></div>
<div className="suboodhyourreview">
<div style={{width:"60%"}}>
<div className="myreviewsetup">
<div className="profileinfo">
    <div className="avatar">
<img src='https://cdn-icons-png.flaticon.com/512/2919/2919906.png'></img>
<input type= "text" name="" placeholder="Your thoughts"/>
    </div>
    
</div>
<div className="reviewinfo">

<div className="filesubmit" style={{display:'flex'}}>
<div className='try'>
   
    <input type="file"  id="fileofreview" /> </div>
<button>Post</button>
</div>

</div>



</div>
<div className="suboodhallreviews">

<Suboodhreviews/>
    

</div>
</div>

<div className="suboodhreviewright">

</div>



</div>





</div>











{/* <div className="right">
<img src={aniimg} id='suboodhboy'/>
        
</div> */}
</div>

</div>

</>)

}
export default Suboodh