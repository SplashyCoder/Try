import {NavLink} from 'react-router-dom'
import React from 'react'
import './header.css'





const Header = ({titulo,logo}) =>(
        <header className='Header'>
        <div className='contenido'>
            <div className='Logo'>
                <a href="/"><img className="main_logo" src={logo} alt="icon" /></a>
                <h1>{titulo}</h1>
            </div>
                <nav>
                    <NavLink id='HederLink' to = "/">Home</NavLink>
                    <NavLink id='HederLink' to = "/">Projects</NavLink>
                    <NavLink id='HederLink' to = "/">Education</NavLink>
                    <NavLink id='HederLink' to = "/">About</NavLink> 
                    <NavLink id='HederLink' to = "/">contact</NavLink> 
                </nav>
        </div>       
    </header>
    )

export default Header;