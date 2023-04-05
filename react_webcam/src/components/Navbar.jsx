import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';

export default function Navbar() {
  return (
    <header>
      <nav className='navbar'>
        <Link to="/">
          <img src="/BookTokLogo.png" alt="BookTok" className='navbar__logo' />
        </Link>

        <ul className='navbar__menu'>

          <li>
            <Link to="/Cam"> WebCam</Link>
          </li>

          <li>
            <Link to = "/ScreenShots"> ScreenShots</Link>
          </li>
          <li>
            <Link to= "/WebcamCapture"> Capturing Videos</Link>
          </li>
          <li>
            <Link to = "/ShowingAllCameras">Showing All Cameras</Link>
          </li>
          <li>
            <Link to = "/Mobile"> Mobile</Link>
          </li>
          <li>
            <Link to = "/FiltersWithCloudinary"> Filters with Cloudinary</Link>
          </li>
        </ul>

        <ul className='navbar__icons'>
          <li>
            <a href="https://github.com/csci5117s23/ReactWebcamTechShare"><BsGithub /></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

