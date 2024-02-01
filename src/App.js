import NavBar from './Nav';
import AboutMe from './AboutMe';
import Projects from './Projects';
import TechStacks from './TechStacks';
import './styling/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/aboutme' element={<AboutMe/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/techstacks' element={<TechStacks/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
