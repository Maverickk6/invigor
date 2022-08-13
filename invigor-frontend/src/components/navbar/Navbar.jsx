import React from 'react'
import LogoImage from '../../../assets/invigorLogoWeb.png';


export default function Navbar() {
  return (
    <div className="flex justify-between h-18 bg-red-400 align-center p-4">
       <div className=" flex flex-row justify-between w-32">
        <img src={ LogoImage } height="25" width="25"/>
        <p>Invigor</p>
       </div>
       <p>St Mary's Hospital</p>
       <div>
           John Doe
       </div>
    </div>
  )
}
