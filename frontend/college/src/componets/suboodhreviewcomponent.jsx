
import { useState } from 'react';
import './suboodhreview.css'
function Suboodhreviews(prop){
   
    
console.log(prop);

  
   
       
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
            <img src='https://cdn-icons-png.flaticon.com/512/2919/2919906.png'></img>
        </div>
            
        
        
        
        </div>
            
            
          }</> )
   


   
   
}
export default   Suboodhreviews