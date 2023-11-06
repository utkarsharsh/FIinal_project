import React, { useEffect, useState } from "react";
import './mainpagescss.css'
import Typed from "typed.js";
import {  useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import facebook from './facebook-f.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faBars } from '@fortawesome/free-solid-svg-icons'


import {useTypewriter} from 'react-simple-typewriter'
 function  Mainpage (){

    const el = useRef(null);
    const ml=useRef(null);
    const pl=useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Best infrastructure", "Coding enviorment", ], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 100,
          smartBackspace: true,
          loop: true,
         
          cursorChar: "!"
        })
        
        return () => {
            typed.destroy();
          };},[]);
          useEffect(() => {
            const typed = new Typed(ml.current, {
              strings: [ "Coding enviorment", ], // Strings to display
              // Speed settings, try diffrent values untill you get good results
              startDelay: 300,
              typeSpeed: 100,
              backSpeed: 100,
              backDelay: 100,
              smartBackspace: true,
              loop: true,
             
              cursorChar: "!"
            })
            return () => {
                typed.destroy();
              };},[]);
              useEffect(() => {
                const typed = new Typed(pl.current, {
                  strings: [ "Drama culture", ], // Strings to display
                  // Speed settings, try diffrent values untill you get good results
                  startDelay: 300,
                  typeSpeed: 100,
                  backSpeed: 100,
                  backDelay: 100,
                  smartBackspace: true,
                  loop: true,
                 
                  cursorChar: "!"
                })
                return () => {
                    typed.destroy();
                  };},[])

return(
<>
<div className="mainpagemaindiv">
<div className="mainpagetop">
<div className="mainpagein" >
    <div className="mainpageinnavbar">
<div className="mainpagelogo">
    <img src="https://preview.colorlib.com/theme/edustage/img/logo.png.webp" alt="" />
</div>
<div className="response">
    <span><FontAwesomeIcon icon={faBars} /></span>
</div>
<div className="responsemenu">
<ul>
    <li>Home</li>
    <li>About</li>
    <li>News</li>
    <li>contact</li>
</ul>

</div>
<div className="mainlist"> 
<ul>
    <li>Home</li>
    <li>About</li>
    <li>News</li>
    <li>contact</li>
</ul>
</div>
    </div>

<img src="https://preview.colorlib.com/theme/edustage/img/banner/home-banner.jpg.webp"   className="background"/>

<div className="maintext">
    <p>Best review site in this world </p>
    <h1>Only one step behind your dream college</h1>
    <button>Get  start </button>
</div>
</div>


</div>
<div className="maincolleges">
<h1 style={{marginBottom :"28px"}}> Choose colleges for your review   </h1>
    <div className="maincollegestop">

<div className="akgec"> <div className="akgecimgmain"><img src="https://infoadmission.com/wp-content/uploads/2023/05/ajay-kumar-garg-750x375-1.jpg" alt="" />
</div>
<button>
    Review it
</button>
<div className="akgectext">
    <h1>Akgec</h1>
    <p>Akgec has <span ref={el}>  </span></p>
</div>





</div>
<div className="akgec"><div className="akgecimgmain"><img src="https://images.shiksha.com/mediadata/images/articles/1652182966php7znqYX.jpeg" alt="" />  </div>

<button>
 upcoming
</button>
<div className="akgectext">
    <h1>Abes</h1>
    <p>Abes has <span ref={ml}></span></p>
</div>





</div>
<div className="akgec"><div className="akgecimgmain"><img src="https://getmyuni.azureedge.net/college-image/big/ims-ghaziabad-university-courses-campus-ghaziabad.jpg" alt="" /></div>
<button>
    upcoming
</button>
<div className="akgectext">
    <h1>Ims</h1>
    <p>Ims has <span ref={pl}></span></p>
</div>
</div> </div>
   </div>
   
<div className="ourteam">
    <div className="mainpageheading">
        <h1>Our experts Counslers </h1>
        <p style={{color:"grey"}}>Quibusdam rem labore natus doloribus quod officiis fugit ut bland</p>
    </div>
    
    <div className="mainpageteam">
    <Carousel autoPlay infiniteLoop interval={4000}  centerMode transitionTime={2000} className="mainpageteamcorousel">
        <div className="tanishq">
            <div className="tanishqimg">
             
            </div>
            <div className="tanishqabout">
<h1>Tanishq</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, cupiditate!</p>
            </div>
            <div className="tanishqsocialmedia">

            </div>

        </div>
        <div className="rajmishra">
 <div className="tanishqimg">

            </div>
            <div className="tanishqabout">
            <h1>Rajmishra</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, cupiditate!</p>
            </div>
            <div className="tanishqsocialmedia">
                
            </div>
        </div>
        <div className="shreyansh">
        <div className="tanishqimg">

</div>
<div className="tanishqabout">

</div>
<div className="tanishqsocialmedia">
<h1>Shreyansh</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, cupiditate!</p>
</div>
        </div>
        </Carousel>
      </div>
    
     
</div>








<div className="memberofthecollege"> 
<div className="motcl">
    <div style={{textAlign:"start"}}>
<h1>Are you studying in college ?</h1>
<h2>Get the pass</h2></div>
<div className="passbenifit">
    <div className="gettingnewupdates">
<h2>Get new updates</h2>
    </div>
    <div className="acessupcominginformationaboutsocity">
        <h2>Get upcomming info about socities</h2>
        </div>
</div>
 <h1></h1>
</div>
<div className="motcr">
<div className="forms">
    <input type="text" placeholder="Student no"></input>
    <button >Submit</button>
</div>
</div>
</div>





<div className="mainfooter">
    <div className="mainfooterinput">
        <div className="mainfooterinput0">

            <h2>Top Products</h2>
            <p>Managed Website</p>
            <p> Manage Reputation</p>
            <p> Power Tools</p>
            <p> Marketing Service</p>


        </div>
        <div className="mainfooterinput0">
        <h2>Quick Links</h2>
            <p>Jobs</p>
            <p>Brand Assets </p>
            <p> Investor Relations</p>
            <p> Terms of Service</p>

        </div>
        <div className="mainfooterinput0">
        <h2>Features</h2>
        <p>Jobs</p>
            <p>Brand Assets </p>
            <p> Investor Relations</p>
            <p> Terms of Service</p>

        </div>
        <div className="mainfooterinput0">
        <h2>Top Products</h2>
            <p>Guides</p>
            <p> Research</p>
            <p>Experts</p>
            <p> Agencies</p>

        </div>
        <div className="mainfooterinputsocial">
       
    </div>

       
    </div>
    <div style={{color:"white"}}>Copyright ©2023 All rights reserved    </div>
    
</div>





   </div>

</>
)


 }
 export default Mainpage