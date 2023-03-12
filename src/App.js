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
import Vans, { loader as VansLoader } from './pages/vans/Vans'
import VanDetail, { loader as vanDetailLoader } from './pages/vans/VanDetail';
import Error from './components/Error'
import "./server"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route 
        path='vans' 
        element={<Vans />} 
        loader={VansLoader}
        errorElement={<Error />}
      />
      <Route 
        path='vans/:id' 
        element={<VanDetail />} 
        loader={vanDetailLoader} 
        errorElement={<Error />} 
      />
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />  
    </div>
  );
}

export default App;
