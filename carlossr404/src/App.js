import './App.css';
import {Banner, Experience} from './Functions.js'


function App() {

  //Variables
  //Clinical Information Specialist Experience descriptions
  const desc_CIS = [
    "Leveraged Oak Street Health's population health tools to support clinical documentation improvement",
    "Successfully provided accurate and timely patient visit documentation through Greenway and Canopy, preferred Electronic Medical Record (EMR) programs, in a structured note",
    "Ensured appropriate billing",
    "Participated in weekly 'Careteam Meetings' to discuss quality metrics and areas of improvement"
  ];

  //MOVE-IT Lab Coordinator Experience descriptions
  const desc_MOVEIT = [
    "Calibrated and maintained Motive's Motion Caputure System by OptiTrack",
    "Ensured... "
  ];

  //Visiting Researcher Expereince descriptions
  const desc_VISITING = [
    ". . . "
  ];

  return (
    <div className="App">

      <h1 className='App-header'>
        <div style={{textAlign: 'left'}} onClick={() => window.location.replace("/#home")}>Carlossr404</div>
      </h1>

      <Banner id="home"/>
      
      <p>
        <h2 className='h2'>About</h2>
        <div className='about'>This is a small bio about me (Carlos)</div>
      </p>

      <p>
        <h2 id="exp" className='h2'>Experience</h2>
        <div className='experience-block'>
          <Experience 
          logo={'imgs/osh_logo.jpeg'}
          title={"Clinical Information Specialist"} 
          company={"Oak Street Health"}
          location={"Houston, TX"}
          date={"August 2023 - Present"}
          desc={desc_CIS} />

          <Experience
          logo={'imgs/rhodes_logo.jpeg'}
          title={"MOVE-IT Lab Coordinator"}
          company={"Rhodes College"}
          location={"Memphis, TN"}
          date={"August 2022 - May 2023"}
          desc={desc_MOVEIT} />

          <Experience
          logo={'imgs/vandy_logo.jpeg'}
          title={"Visiting Researcher"}
          company={"Vanderbilt University"}
          location={"Nashville, TN"}
          date={"June 2021 - August 2021"}
          desc={desc_VISITING}/>
        </div>
        <img src="" alt='' className='experience-img'/>
      </p>

      <p>
        <h2 id="projects" className='h2'>Projects</h2>
      </p>

      <p>
        <h2 id="pubs" className='h2'>Publications</h2>
        <div className='pub'>
          <a href='https://dl.acm.org/doi/abs/10.1145/3449067'>Estimating Distance in Action Space in Augmented Reality</a>
          <br/>
          <text>Holly C. Gagnon, <u>Carlos Salas Rosales</u>, Ryan Mileris, Jeanine K. Stefanucci, Sarah H. Creem-Regehr, and Robert E. Bodenheimer</text>
          <br/>
          <text>ACM Transactions on Applied Perception | <a href='docs/2021_Gagnon_ACM_Estimating.pdf'>PDF</a></text>
          <br/>
        </div>
        <div className='pub'>
          <a href='https://ieeexplore.ieee.org/abstract/document/8798095'>Distance Judgments to On- and Off Ground Objects in Augmented Reality</a>
          <br/>
          <text><u>Carlos Salas Rosales</u>, Grant Pointon, Haley Adams, Jeanine Stefanucci, Sarah Creem-Regehr, William B. Thompson, and Bobby Bodenheimer</text>
          <br/>
          <text>IEEE Virtual Reality 2019 | <a href='docs/2019_SalasRosales_IEEEVR_Distance.pdf'>PDF</a></text>
        </div>  
      </p>

    </div>
  );
}

export default App;
