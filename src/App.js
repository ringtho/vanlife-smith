import './App.css';
import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider, 
    Route 
} from "react-router-dom"
import Error from './components/Error'
import Layout from './components/Layout';
import HostLayout from './components/HostLayout'
import Home from "./pages/Home"
import About from './pages/About'
import Vans, { loader as VansLoader } from './pages/vans/Vans'
import VanDetail, { loader as vanDetailLoader } from './pages/vans/VanDetail';
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostVans, {loader as HostVansLoader} from './pages/host/HostVans'
import HostVanDetails, { loader as HostVanDetailsLoader} from './pages/host/HostVanDetails'
import HostVanInfo from './pages/host/HostVanInfo'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'



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
      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} errorElement={<Error />}/>
        <Route path="income" element={<Income />} errorElement={<Error />}/>
        <Route path="reviews" element={<Reviews />} errorElement={<Error />}/>
        <Route path="vans" element={<HostVans />} loader={HostVansLoader} errorElement={<Error />}/>
        <Route path="vans/:id" element={<HostVanDetails />} loader={HostVanDetailsLoader} errorElement={<Error />}>
          <Route index element={<HostVanInfo/>} errorElement={<Error />}/>
          <Route path="pricing" element={<HostVanPricing/>} errorElement={<Error />}/>
          <Route path="photos" element={<HostVanPhotos/>} errorElement={<Error />}/>
        </Route>
      </Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />  
    </div>
  );
}

export default App;
