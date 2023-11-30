import AboutMe from './AboutMe';
import NavBar from './Nav';
import Projects from './Projects';
import TechStacks from './TechStacks';
import './styling/App.css';
import pinkBg from './pinkBg.jpg'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
function App() {
  return (
    <div>
      {/* <div><NavBar/></div> */}
      <Parallax pages={4}>

        <ParallaxLayer offset={0} speed={1} factor={1}
          style={{
            backgroundImage: `url(${pinkBg})`,
            backgroundSize: 'cover',
          }}>
          <div>About me</div>
        </ParallaxLayer>
        <ParallaxLayer offset={1}
          style={{
            backgroundImage: `url(${pinkBg})`,
            // backgroundSize: 'cover',
          }}>
          <div>Tech Stacks</div>
        </ParallaxLayer>
        <ParallaxLayer offset={2}
          style={{
            backgroundImage: `url(${pinkBg})`,
            backgroundSize: 'cover',
          }}>
          <div>Projects</div>
        </ParallaxLayer>

        {/* <div className='center-container'>
          <AboutMe/>
          <TechStacks/>
          <Projects/>
        </div> */}
      </Parallax>
    </div>
  );
}

export default App;
