import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Courses.css'
function Courses() {
    return (
        <div>
            <div className='nav'>
                <h1>Courses</h1>
                <NavLink class='text-dark'><h3>Home <span>/</span></h3></NavLink>
            </div>
            <div className='course'>
                <h1> Our <span>Courses</span> </h1>
                <div className='pad'>
                    <div >
                    <figure ><NavLink to='/python' style={{ textDecoration: 'none' }} class='text-dark'>
                        <div className='cover'>
                        <img src="https://hyderabadittrainings.com/images/course/python.webp" /></div>
                        <figcaption>
                            <h5 class='p-2 text-dark'>Python Full stack</h5>
                        </figcaption></NavLink>
                     
                    </figure>
                    </div>
                    <figure ><NavLink to='/' style={{ textDecoration: 'none' }}>
                    <div className='cover'>
                        <img src="https://hyderabadittrainings.com/images/course/full-stack-dev-min.jpg" />
                        </div>
                        <figcaption>
                            <h5 class='p-2 text-dark'>Mern Full Stack Developer</h5>
                        </figcaption></NavLink>
                    </figure>
                    <figure ><NavLink to='/' style={{ textDecoration: 'none' }}>
                    <div className='cover'>
                        <img src="https://hyderabadittrainings.com/images/course/ui.webp" />
                        </div>
                        <figcaption>
                            <h5  class='p-2 text-dark'>UI Development</h5>
                        </figcaption></NavLink>
                    </figure>
                    <figure ><NavLink to='/' style={{ textDecoration: 'none' }}>
                    <div className='cover'>
                        <img src="https://hyderabadittrainings.com/images/course/react%20js%20training%20banner.webp" />
                        </div>
                        <figcaption>
                            <h5  class='p-2 text-dark'>React JS</h5>
                        </figcaption></NavLink>
                    </figure>
                    <figure ><NavLink to='/' style={{ textDecoration: 'none' }}>
                    <div className='cover'>
                        <img src="https://hyderabadittrainings.com/images/course/python%20(2)-min.jpg" />
                        </div>
                        <figcaption>
                            <h5  class='p-2 text-dark'>UI/UX Designing</h5>
                        </figcaption></NavLink>
                    </figure>
                    <figure ><NavLink to='/' style={{ textDecoration: 'none' }}>
                    <div className='cover'>
                        <img src="https://hyderabadittrainings.com/images/course/nodejs.webp" />
                        </div>
                        <figcaption>
                            <h5  class='p-2 text-dark'>Node JS</h5>
                        </figcaption></NavLink>
                    </figure>
                    <figure ><NavLink to='/' style={{ textDecoration: 'none' }}>
                    <div className='cover'>
                        <img src="https://hyderabadittrainings.com/images/course/web%20design-min.jpg" />
                        </div>
                        <figcaption>
                            <h5  class='p-2 text-dark'>Web Designing</h5>
                        </figcaption></NavLink>
                    </figure>
                    <figure ><NavLink to='/' style={{ textDecoration: 'none' }}>
                    <div className='cover'>
                        <img src="https://hyderabadittrainings.com/images/course/phpmysql-min.jpg" />
                        </div>
                        <figcaption>
                            <h5  class='p-2 text-dark'>PHP with MySQL</h5>
                        </figcaption></NavLink>
                    </figure>
                    <figure >
                    <div className='cover'>
                        <img
                            src="https://hyderabadittrainings.com/images/course/shutterstock_292018628-e1502132254355-min.jpg" />
                            </div>
                        <figcaption>
                            <h5  class='p-2 text-dark'>Digial Marketing</h5>

                        </figcaption> <NavLink />
                    </figure>
                    <figure ><NavLink to='/' style={{ textDecoration: 'none' }}>
                    <div className='cover'>
                        <img src="https://hyderabadittrainings.com/images/course/ui-design-min.jpg" />
                        </div>
                        <figcaption>
                            <h5 class='p-2 text-dark'>UI Designing</h5>
                        </figcaption></NavLink>
                    </figure>
                    <figure ><NavLink to='/' style={{ textDecoration: 'none' }}>
                    <div className='cover'>
                        <img src="https://hyderabadittrainings.com/images/course/django%20course.webp" />
                        </div>
                        <figcaption>
                            <h5 class='p-2 text-dark'>DJango</h5>
                        </figcaption></NavLink>
                    </figure>
                    <figure ><NavLink to='/' style={{ textDecoration: 'none' }}>
                    <div className='cover'>
                        <img src="https://hyderabadittrainings.com/images/course/graphics-design.webp" />
                        </div>
                        <figcaption>
                            <h5 class='p-2 text-dark'>Graphic Designing</h5 >
                        </figcaption></NavLink>
                    </figure>
                    <figure ><NavLink to='/' style={{ textDecoration: 'none' }}>
                    <div className='cover'>
                        <img src="https://hyderabadittrainings.com/images/course/seo-min.jpg" />
                        </div>
                        <figcaption>
                            <h5 class='p-2 text-dark'>SEO</h5>
                        </figcaption></NavLink>
                    </figure>
                    <figure ><NavLink to='/' style={{ textDecoration: 'none' }}>
                    <div className='cover'>
                        <img src="https://hyderabadittrainings.com/images/course/adwords-min.jpg" />
                        </div>
                        <figcaption>
                            <h5 class='p-2 text-dark'>Google Adwords</h5>
                        </figcaption></NavLink>
                    </figure>
                    <figure ><NavLink to='/' style={{ textDecoration: 'none' }}>
                    <div className='cover'>
                        <img src="https://hyderabadittrainings.com/images/course/python.webp" />
                        </div>
                        <figcaption>
                            <h5 class='p-2 text-dark'>Python Full stack</h5 >
                        </figcaption></NavLink>
                    </figure>
                    <figure ><NavLink to='/' style={{ textDecoration: 'none' }}>
                    <div className='cover'>
                        <img src="https://hyderabadittrainings.com/images/course/jfc.jpg" />
                        </div>
                        <figcaption>
                            <h5 class='p-2 text-dark'>Java Full stack</h5>
                        </figcaption></NavLink>
                    </figure>
                </div>
            </div>

        </div>
    )
}

export default Courses