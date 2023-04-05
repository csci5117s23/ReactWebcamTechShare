import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import ScreenShots from './pages/ScreenShots';
import CapturingVideos from './pages/CapturingVideos';
import ShowingAllCameras from './pages/ShowingAllCameras';
import Mobile from './pages/Mobile';
import Cam from './pages/Cam';
import FiltersWithCloudinary from './pages/FiltersWithCloudinary';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,

    children: [
        {index: true, element: <Home/>},
        {path: 'Cam',element: <Cam/>},
        {path: 'ScreenShots', element: <ScreenShots/>},
        {path: 'CaputringVideos', element: <CapturingVideos/>},
        {path: 'ShowingAllCameras', element: <ShowingAllCameras/>},
        {path: 'Mobile', element: <Mobile/>},
        {path: 'FiltersWithCloudinary',element: <FiltersWithCloudinary/>}
    ]
  },  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

