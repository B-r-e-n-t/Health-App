import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <header className='header'>
            <div className='header-profile'>
                <img className='photo' src="src/assets/photo.jpg" alt="" />
                <p>FirstName <br />LastName</p>
            </div>
            <div>
                <img className='menu-bars' src="src/assets/menu.png" alt="" />
            </div>
        </header>
    </div>
  )
}

export default Navbar