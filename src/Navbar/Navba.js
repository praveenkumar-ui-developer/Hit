import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'
import Select from 'react-select'
function Navba() {
    // const options2=[{ value: 'AND', label: 'jdnsnn' },
    // { value: 'OR', label: 'sdnjsnfsjdn' }]
    return (
      <div className='navbar'>
        <div className='container '>
            <Link to='/'> <img className='logo' src="https://hyderabadittrainings.com/images/logo.jpg" alt="logo" />
            </Link>
            <nav className='link'>
                <Link to='/about'><button class='btn '>ABOUT US</button></Link><Link to='/courses'><button class='btn '>COURSES</button></Link><Link to='newbatch'><button class='btn '>NEW
                    BATCHES</button></Link>
                    
<div class="btn-group ">
  {/* <button type="button" class="btn ">PLACEMENTS</button> */}
  <button type="button" className='dropdown' class="btn  dropdown dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually"> PLACEMENTS</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item w-100" href="#">CURRUNT OPENINGS</a></li>
    <li><a class="dropdown-item" href="#">RECENTLY PLACED</a></li>
    <li><a class="dropdown-item" href="#">PLACED COMPANIED</a></li>
    <li><a class="dropdown-divider"></a></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
                <Link to='register'><button class='btn '>REGISTER</button></Link><Link><button class='btn '>STUDENT
                    ZONE</button></Link><Link><button class='btn '>CONTACT US</button></Link>

            </nav>
        </div>
        </div>
    )
}

export default Navba