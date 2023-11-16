import AboutMe from './AboutMe';
import NavBar from './Nav';
import Projects from './Projects';
import TechStacks from './TechStacks';
import './styling/App.css';
function App() {
  return (
    <>

      <NavBar/>
      <div className='center-container'>
        <AboutMe/>
        <TechStacks/>
        <Projects/>
      </div>
    </>
  );
}

export default App;
