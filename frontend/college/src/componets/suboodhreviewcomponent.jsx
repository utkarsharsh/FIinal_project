
import { useState } from 'react';
import './suboodhreview.css'
function Suboodhreviews(prop){
   
    
console.log(prop);
if(!prop.name || !prop.reviewsurl || prop.reviewsurl=="" || prop.reviewsurl == "jai ho"){
    //maine kuch image ka url backend mein jaiho rakha tha isliye diikat aa rhi thi
    // backend se jai ho hatana hai ..yad se  
return(<>
</>)

}  

   
       
        return( <>
       { 
       
            <div className="suboodhreviewprofiles">
               
            <div className='suboodhallreviewsavatarandtext'>
                <img src='https://cdn-icons-png.flaticon.com/512/2919/2919906.png' id='suboodhallreviewsavatar'/>
        <p> {prop.name} </p>
        </div>
        
            
               
                <div className='suboodhcaptions'>
            <p>{prop.reviews}</p>
        </div>
        <div className="suboodhimagereview">
            <img src={prop.reviewsurl}></img>
        </div>
            
        
        
        
        </div>
            
            
          }</> )
   


   
   
}
export default   Suboodhreviews