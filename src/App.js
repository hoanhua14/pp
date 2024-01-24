import NavBar from './Nav';
import AboutMe from './AboutMe';
import './styling/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/aboutme' element={<AboutMe/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
