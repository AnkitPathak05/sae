import React, {useState} from 'react'
import './Home.css'

function Home() {

  const [currentImage, setCurrentImage] = useState('img2.png');
  const [clickedbtn, setclickedbtn]=useState(1);  

  const handleButtonClick = (imageUrl, btnidx) => {
    setCurrentImage(imageUrl); 
    setclickedbtn(btnidx);
  }

  const getButtonStyle = (btnIdx) => {
    return clickedbtn === btnIdx && window.outerWidth>1085? { backgroundColor: 'black', color: 'white' } : {};
  };


  return (
    <div className='main'>
      <div className='first'>
         <p id='p1'>Team Trident</p>
         <div id='p2'>
         <p>SAE(Society of Automotive Engineers) aims to give a platform to people who wish to learn about and build automobiles. Our teams take part in various RC and automotive events all round the year....</p>
         </div>
      </div>
      <div id='second'>
        <div className='second'>
            <h1>Advancing <span class="highlight">Innovation</span> with the technology</h1>
            <div className='third'>
              <div id='left'>
                <p>The Science and Technology Council at IIT BHU is a student-run organization that aims to promote the understanding and application of Science and Technology among the IIT BHU community. </p>
              </div>
              <div id='right'>
                <img src="img3.png" alt="" />
              </div>  
            </div>  
        </div>
      </div>
      <div className='section'>
        <div className='benefits'>
          <h1>Benefits of Contribution</h1>
          <div className='items'>
            <div className='item'>
              <img src="benefits1.png" alt="" />
              <h2>Exposure</h2>
              <p>Our advanced spyware detection engine can identify if a device contains spyware or bugging software.</p>
            </div>
            <div className='item'>
              <img src="benefits2.png" alt="" />
              <h2>R&D and Innovation</h2>
              <p>Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords).</p>
            </div>
            <div className='item'>
              <img src="benefits3.png" alt="" />
              <h2>Networking</h2>
              <p>Check which apps can access your location, microphone or camera. Get alerted if a known tracking app is installed.</p>
            </div>
            <div className='item education'>
              <img src="benefits5.png" alt="" />
              <h2>Enhancing Projects and education</h2>
              <p>Analyze your operating system for signs of tampering that could compromise security, such as Jailbreaking.</p>
            </div>
            <div className='item'>
              <img src="benefits4.png" alt="" />
              <h2>Opportunities</h2>
              <p>Our intelligent scan will either safely remove threats for you or provide easy-to-follow instructions.</p>
            </div>
            <div className='item'>
              <img src="benefits6.png" alt="" />
              <h2>Practical Applications</h2>
              <p>We create easy to use apps that can check your device for vulnerabilities in a matter of minutes.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='sponsors'>
        <h1>Our Sponsors</h1>
        <div className='simages'>
          <img src="s1.png" alt="ansys" />
          <img src="s2.png" alt="Flaunta Customs" />
          <img src="s3.png" alt="3d connexion" />
        </div>
      </div>
      <div className="team">
          <div className="box">
            <h1>Meet Our Team</h1>
            <div className='innerbox'>
              <div className='verticals'>
                  <div ><button onClick={() => handleButtonClick('img2.png', 1)} style={getButtonStyle(1)}>Helm</button></div>
                  <img id="shortimg" src="img2.png" alt="" />


                  <div><button onClick={() => handleButtonClick('random1.jpg', 2)} style={getButtonStyle(2)}>Aerodynamics</button></div>
                  <img id="shortimg" src="random1.jpg" alt="" />


                  <div><button onClick={() => handleButtonClick('random2.jpeg', 3)} style={getButtonStyle(3)}>Vehicle Dynamics</button></div>
                  <img id="shortimg" src="random2.jpeg" alt="" />


                  <div><button onClick={() => handleButtonClick('random3.jpeg', 4)} style={getButtonStyle(4)}>Structures</button></div>
                  <img id="shortimg" src="random3.jpeg" alt="" />


                  <div><button onClick={() => handleButtonClick('random4.jpeg', 5)} style={getButtonStyle(5)}>Marketing</button></div>
                  <img id="shortimg" src="random4.jpeg" alt="" />


                  <div><button onClick={() => handleButtonClick('random5.jpeg' , 6)} style={getButtonStyle(6)}>Web Team</button></div> 
                  <img id="shortimg" src="random5.jpeg" alt="" />

              </div>
              <div className='timages'>
                <img src={currentImage} alt="team img" />
              </div>
            </div>
            </div>
          </div>
      
    </div>
  )
}

export default Home

