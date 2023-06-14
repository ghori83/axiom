import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <ul className='d-flex justify-content-around list-unstyled bg-black text-white py-3'>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/'>Todos</Link></li>
                <li><Link to='/local-storage'>Local Storage</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/home'>Home</Link></li>


            </ul>
        </div>
    )
}

export default Navbar