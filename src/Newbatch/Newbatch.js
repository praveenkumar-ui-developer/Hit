import React from 'react'
import { Link } from 'react-router-dom'

function Newbatch() {
  return (
    <div>
         <div className='nav'>
                <h1>Courses</h1>
                <Link><h3>Home <span>/</span></h3></Link>
            </div>
         <div className="tble">
                <h1>New <span style={{ color: 'red' }}>Batches</span></h1>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th> Course</th>
                            <th> Date</th>
                            <th> Timings</th>
                            <th> Duration</th>
                            <th> Trainer</th>
                            <th> Register for Demo</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>
                                Python Fullstack Development
                            </td>
                            <td>
                                25-SEP-2023
                            </td>
                            <td>
                                4:00 PM - 5:00 PM
                            </td>
                            <td>
                                90 Days
                            </td>
                            <td>
                                Mr. Sudheer
                            </td>
                            <td>
                                <Link to='/python'><button id='reg'>Register</button></Link>
                            </td>
                        </tr><tr>
                            <td>
                                Python Fullstack Development
                            </td>
                            <td>
                                25-SEP-2023
                            </td>
                            <td>
                                4:00 PM - 5:00 PM
                            </td>
                            <td>
                                90 Days
                            </td>
                            <td>
                                Mr. Sudheer
                            </td>
                            <td>
                                <Link to='/'><button id='reg'>Register</button></Link>
                            </td>
                        </tr><tr>
                            <td>
                                Python Fullstack Development
                            </td>
                            <td>
                                25-SEP-2023
                            </td>
                            <td>
                                4:00 PM - 5:00 PM
                            </td>
                            <td>
                                90 Days
                            </td>
                            <td>
                                Mr. Sudheer
                            </td>
                            <td>
                                <Link to='/'><button id='reg'>Register</button></Link>
                            </td>
                        </tr><tr>
                            <td>
                                Python Fullstack Development
                            </td>
                            <td>
                                25-SEP-2023
                            </td>
                            <td>
                                4:00 PM - 5:00 PM
                            </td>
                            <td>
                                90 Days
                            </td>
                            <td>
                                Mr. Sudheer
                            </td>
                            <td>
                                <Link to='/'><button id='reg'>Register</button></Link>
                            </td>
                        </tr><tr>
                            <td>
                                Python Fullstack Development
                            </td>
                            <td>
                                25-SEP-2023
                            </td>
                            <td>
                                4:00 PM - 5:00 PM
                            </td>
                            <td>
                                90 Days
                            </td>
                            <td>
                                Mr. Sudheer
                            </td>
                            <td>
                                <Link to='/'><button id='reg'>Register</button></Link>
                            </td>
                        </tr><tr>
                            <td>
                                Python Fullstack Development
                            </td>
                            <td>
                                25-SEP-2023
                            </td>
                            <td>
                                4:00 PM - 5:00 PM
                            </td>
                            <td>
                                90 Days
                            </td>
                            <td>
                                Mr. Sudheer
                            </td>
                            <td>
                                <Link to='/'><button id='reg'>Register</button></Link>
                            </td>
                        </tr><tr>
                            <td>
                                Python Fullstack Development
                            </td>
                            <td>
                                25-SEP-2023
                            </td>
                            <td>
                                4:00 PM - 5:00 PM
                            </td>
                            <td>
                                90 Days
                            </td>
                            <td>
                                Mr. Sudheer
                            </td>
                            <td>
                                <Link to='/'><button id='reg'>Register</button></Link>
                            </td>
                        </tr><tr>
                            <td>
                                Python Fullstack Development
                            </td>
                            <td>
                                25-SEP-2023
                            </td>
                            <td>
                                4:00 PM - 5:00 PM
                            </td>
                            <td>
                                90 Days
                            </td>
                            <td>
                                Mr. Sudheer
                            </td>
                            <td>
                                <Link to='/'><button id='reg'>Register</button></Link>
                            </td>
                        </tr><tr>
                            <td>
                                Python Fullstack Development
                            </td>
                            <td>
                                25-SEP-2023
                            </td>
                            <td>
                                4:00 PM - 5:00 PM
                            </td>
                            <td>
                                90 Days
                            </td>
                            <td>
                                Mr. Sudheer
                            </td>
                            <td>
                                <Link to='/'><button id='reg'>Register</button></Link>
                            </td>
                        </tr><tr>
                            <td>
                                Python Fullstack Development
                            </td>
                            <td>
                                25-SEP-2023
                            </td>
                            <td>
                                4:00 PM - 5:00 PM
                            </td>
                            <td>
                                90 Days
                            </td>
                            <td>
                                Mr. Sudheer
                            </td>
                            <td>
                                <Link to='/'><button id='reg'>Register</button></Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Newbatch