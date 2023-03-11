import './App.css';
import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider, 
    Route 
} from "react-router-dom"

import Layout from './components/Layout';
import Home from "./pages/Home"
import About from './pages/About'
import Vans from './pages/vans/Vans'
import VanDetail from './pages/vans/VanDetail';
import "./server"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='vans' element={<Vans />} />
      <Route path='vans/:id' element={<VanDetail />} />
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />  
    </div>
  );
}

export default App;
