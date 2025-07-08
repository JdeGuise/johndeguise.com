import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Artie from './pages/Artie'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/artie" element={<Artie/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App