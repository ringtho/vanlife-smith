import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from './components/Layout';
import Home from "./pages/Home"
import About from './pages/About'
import Vans from './pages/Vans'
import "./server"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/vans' element={<Vans />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
