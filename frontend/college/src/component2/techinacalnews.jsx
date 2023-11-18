import { Link } from 'react-router-dom'
import './technicalnews.css'
import { useState } from 'react';
function Technicalnews({technews}){
    let a=true;
    return(
technews.map((technews)=>{
    const [showtechimgeurl,showsettecimageurl]=useState(true);
    if(technews.urlToImage==null) {return(<> </>)}
    // else showsettecimageurl(true);

    return (
        <>
        <div className="Technicalnewstital">
        <h5>{technews.title}</h5>
        <p>{technews.publishedAt
        }</p>
        </div>
        <div  className="Technicalnewsimg" >
            <img src={technews.urlToImage} alt="" />
        </div>
        <div className="Technicalnewsdiscreption">
            <p>  {technews.description}</p>
        </div>
        <Link to={technews.url 
        } className='technewsurl'>    <button> <div className="btnani" style={{backgroundColor:"white"}}></div>Readmore </button>        </Link>
        </>
            )


})
    )
}
export default Technicalnews