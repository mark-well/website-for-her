import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import About from './views/About'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
