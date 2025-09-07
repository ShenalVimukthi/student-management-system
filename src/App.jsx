import { Routes , Route } from 'react-router-dom';
import './App.css'

// Components
import Landing from './components/Landing';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Teachers from './components/Teachers';

function App() {
  

  return (
    <div>
        <Routes>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/' element={<Landing/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/courses' element={<Courses/>}/>
           <Route path='/teachers' element={<Teachers/>}/>
        </Routes>
    </div>
  )
}

export default App
