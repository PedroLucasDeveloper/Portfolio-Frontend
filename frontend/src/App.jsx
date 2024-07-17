import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
      </Routes>
    </Router>
  )
}

export default App

