import { Routes , Route } from 'react-router-dom';
import './App.css'

// Components
import Landing from './components/Landing';
import NotFound from './components/NotFound';

function App() {
  

  return (
    <div>
        <Routes>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/' element={<Landing/>}/>
        </Routes>
    </div>
  )
}

export default App
