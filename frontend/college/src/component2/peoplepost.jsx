import "./peoplepost.css"
function Peoplepost({others}){

return (
    <>{others.map((e)=>{
return(
<div className="postprofileavtartop">
<div className="postprofileavtar">
    <div style={{display:"flex",alignItems:"center"}}>
    <img src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"></img>
    <p style={{marginLeft:"8px"}}>{e.name}</p>
    </div>
</div>
<div className="peoplepostimage">
    <img src={e.eventurl} alt="" />
</div>
<div className="peoplepostcaption">
    <p>{e.caption} </p>
</div>
</div>

)



    })}
    
    </>
)


}
export default Peoplepost