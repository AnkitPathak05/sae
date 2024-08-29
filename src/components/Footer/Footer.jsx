import React from "react";
import './Footer.css';

const Footer = () => {
  
  const handleclick=()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="maincontainer">
        <div className="container">
      <div className="logo citem">
        <img id="img1" src="https://www.saeiitbhu.in/images/footer/bhuBuilding.svg" alt="bhu logo"  />
        <img src="https://www.saeiitbhu.in/images/footer/sae_logo.svg" alt="sae logo" id="img2"/>
      </div>
      <div className="address citem">
        <h2><span>SAE</span> Collegiate Club</h2>
        <p>Technical Assistance Centre, Mechanical department</p>
        <p>IIT (BHU) Varanasi, 221005, Uttar Pradesh, India</p>
      </div>
      
      <div className="social citem">
        <h2>Socials</h2>
        <div>
          <span><img src="https://www.saeiitbhu.in/images/social/instagram_hero.svg" alt="sae instagram" />  Instagram</span>
          <span><img src="https://www.saeiitbhu.in/images/social/facebook_hero.svg" alt="sae instagram" />  Facebook</span>
          <span><img src="https://www.saeiitbhu.in/images/social/linkedin_hero.svg" alt="sae instagram" />  LinkedIn</span>
          <span><img src="https://www.saeiitbhu.in/images/social/mail_hero.svg" alt="sae instagram" />  Email</span>
        </div>
      </div>
      <div className="email citem">
          <h2>Stay up to date</h2>
          <form className="form">
            <input type="email" placeholder="Your email address"></input>
            <button type="submit"><img src="https://www.saeiitbhu.in/images/footer/submit_icon.svg" alt="Submit" className="submit"></img></button>
          </form>

        <button className="scroll" onClick={()=>handleclick()}>
          <img src="https://www.saeiitbhu.in/images/footer/Vector.png" alt="Scoll to top" />
        </button>
      </div>
      

    </div>

    <div className="shortscreen">
        <div>
          <span><img src="https://www.saeiitbhu.in/images/social/instagram_hero.svg" alt="sae instagram" /></span>
          <span><img src="https://www.saeiitbhu.in/images/social/facebook_hero.svg" alt="sae instagram" /></span>
          <span><img src="https://www.saeiitbhu.in/images/social/linkedin_hero.svg" alt="sae instagram" /></span>
          <span><img src="https://www.saeiitbhu.in/images/social/mail_hero.svg" alt="sae instagram" /></span>
        </div>
        <h1><span>SAE</span> Collegiate Club</h1>
        <img src="https://www.saeiitbhu.in/images/footer/sae_logo.svg" alt="sae logo" id="img3"/>
        <h2>IIT (BHU) Varanasi, India</h2>
        <div>
          <button className="shortscroll" onClick={()=>handleclick()}>
            <img src="https://www.saeiitbhu.in/images/footer/Vector.png" alt="Scoll to top"/>
          </button>
        </div>
    </div>
    </div>
    
  );
};

export default Footer;
