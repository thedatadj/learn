import './App.css';
// functions
import { Routes, Route, Link } from 'react-router-dom'
// components
import Math from './components/Math'
import Cs from './components/Cs'

function App() {
  return (
    <>
      <nav>
        <Link className='links' to='learn/cs'><h1 id='cs'>Computer Science</h1></Link>
        <Link className='links' to='learn/math'><h1 id='math'>Mathematics</h1></Link>
      </nav>
      <Routes>
        <Route path='learn/cs' element={<Cs />} />
        <Route path='learn/Math' element={<Math />} />
      </Routes>
    </>
  );
}

export default App;
