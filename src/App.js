
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import About from './components/About/About';



function App() {
  return (
    <div >
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Services />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>


   

    </div>
  );
}

export default App;
