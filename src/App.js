
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import LogoPart from './pages/SideBar/LogoPart/LogoPart';
import SideBarPageMain from './Layout/MainPageTwo/SideBarPageMain/SideBarPageMain';



function App() {
  return (
    <div className='AppName'>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Services />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/page2' element = {<SideBarPageMain/>}/>
      </Routes>


   

    </div>
  );
}

export default App;
