import React from 'react'
import './Home.css'
import { Link, NavLink } from 'react-router-dom'
export default function Home() {
    const dec = {
        textDecoration: 'none',
        color: 'black'
    }
    return (

        <div>
            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active " data-bs-interval="1000">
      <img src="https://hyderabadittrainings.com/images/slider/DESK1-min.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"  data-bs-interval="2000">
      <img src="https://hyderabadittrainings.com/images/slider/desk2-min.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"  data-bs-interval="3000">
      <img src="https://hyderabadittrainings.com/images/slider/desk3-min.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon bi bi-arrow-left-circle-fill" aria-hidden="true"> <i class="bi bi-arrow-left-circle-fill"></i></span>
  
    <span class="visually-hidden"> Next</span>
  </button>
</div>









            {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  <div class="carousel-item active">
      <img src="https://hyderabadittrainings.com/images/slider/DESK1-min.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img src="https://hyderabadittrainings.com/images/slider/desk2-min.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://hyderabadittrainings.com/images/slider/desk3-min.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
            {/* <img className='slide' src='https://hyderabadittrainings.com/images/slider/DESK1-min.jpg' alt='pic' /> */}
<div class='container'>
            <div  class='row   '>
                <div className='' class='col-7 col-md-7 col-lg-6 col-xl-6 align-items-justify'>
                    <h2>Welcome to <span style={{ color: 'red' }}>Hyderabad IT Trainings</span> </h2>
                    <p>Hyderabad IT Trainings is a Hyderabad based Training Institute delivering classroom and online trainings
                        in India, USA and UK, Australia. We are Providing high quality training is our core value. We offer both
                        classroom and online training on niche technologies which are in high demand. All our trainers are IT
                        professionals with rich experience.</p>

                    <p> Hyderabad IT Trainings is a leading training and placement company in hyderabad managed by industry
                        experts with more than 9+ years of experience in leading MNC Companies. We are wellknown for our
                        practical approach towards training that enables students to gain realtime exposure.</p>
                    <p> Hyderabad IT Trainings is a one-stop shop for IT courses, Web Development services & Recruitment
                        services. Hyderabad IT Trainings concentrates on its vision of building up strong client and business
                        partnerships. To this end, Hyderabad IT Trainings offers Real-time and placement focuses training
                        services</p>

                </div>
                <form className='' class='col-6 col-md-6 col-lg-4 col-xl-4 container '>
                    <h2>Register Now 
</h2>
                    <input placeholder=' Name' type='text'></input>
                    <input placeholder=' Mail ' type='email'></input>
                    <input placeholder=' Phone ' type='phone'></input>
                    <textarea placeholder='Message'></textarea>
                    <input type="submit" />
                </form>

            </div>
            </div>
            <div className='course'>
                <h2> Our <span style={{color:'red'}}>Courses</span> </h2>
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
            <div className="tble">
                <h2>New <span style={{ color: 'red' }}>Batches</span></h2>
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
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="choose">
                <h2>Trainig Modes</h2>
                <div className='choosed'>
                    <figure><Link to='/' style={dec}>
                        <img src="https://hyderabadittrainings.com/images/conference-min.png" alt="" />
                        <figurecaption>
                            <h4>Class Room Training</h4>
                            <h6>Get trained by Industry Experts via Classroom Training with live projects.</h6>
                        </figurecaption></Link>
                    </figure>
                    <figure><Link Link to='/' style={dec}>
                        <img src="https://hyderabadittrainings.com/images/online-training-min.png" alt="" />
                        <figurecaption>
                            <h4>Class Room Training</h4>
                            <h6>Get trained by Industry Experts via Classroom Training with live projects.</h6>
                        </figurecaption></Link>
                    </figure>
                    <figure><Link Link to='/' style={dec}>
                        <img src="https://hyderabadittrainings.com/images/corporate-min.png" alt="" />
                        <figurecaption>
                            <h4>Class Room Training</h4>
                            <h6>Get trained by Industry Experts via Classroom Training with live projects.</h6>
                        </figurecaption></Link>
                    </figure>
                    <figure><Link Link to='/' style={dec}>
                        <img src="https://hyderabadittrainings.com/images/video-learning-min.png" alt="" />
                        <figurecaption>
                            <h4>Class Room Training</h4>
                            <h6>Get trained by Industry Experts via Classroom Training with live projects.</h6>
                        </figurecaption></Link>
                    </figure>
                </div>
            </div>
            <div className="ychoose">
                <h2>Why <span style={{ color: 'red' }}>Choose Us</span></h2>
                <text className="achoose">
                    <div>
                        <h4>IT experts as Trainers</h4>
                        <p>Learning a technology with a professional who is well expertise in that solve above 80% of your needs.</p>
                    </div>
                    <div>
                        <h4>Full Hands-on Training</h4>
                        <p>We support any training with more practical classes. So, we always prefer to give hands-on training.

                        </p>
                    </div>
                    <div>
                        <h4>Placement Assistance</h4>
                        <p>Every course is covered with interview point questions and real time scenarios of what the company may look after from you.</p>
                    </div>
                    <div>
                        <h4>Affordable Fees</h4>
                        <p>We are dead cheap in fees. Quality training with less price is only at Hyderabad IT Trainings.</p>
                    </div>
                </text>
            </div>
            <div className="training">
                <div className='tra'>
                    <h2>Our <span style={{ color: 'red' }}>Training Approach</span></h2>
                    <figure>
                        <img src="https://hyderabadittrainings.com/images/trainingapproach/earth.png" alt="" />
                        <figcaption>
                            <h4>Theory</h4>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://hyderabadittrainings.com/images/trainingapproach/work.png" alt="" />
                        <figcaption>
                            <h4>Project Work</h4>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://hyderabadittrainings.com/images/trainingapproach/assigment.png" alt="" />
                        <figcaption>
                            <h4>Assignments</h4>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://hyderabadittrainings.com/images/trainingapproach/medal.png" alt="" />
                        <figcaption>
                            <h4>Certification</h4>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://hyderabadittrainings.com/images/trainingapproach/resume-1.png" alt="" />
                        <figcaption>
                            <h4>Resume Preparation</h4>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://hyderabadittrainings.com/images/trainingapproach/interview.png" alt="" />
                        <figcaption>
                            <h4>Interview Preparation</h4>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://hyderabadittrainings.com/images/trainingapproach/resume-1.png" alt="" />
                        <figcaption>

                            <h4>Resume Marketing</h4>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://hyderabadittrainings.com/images/trainingapproach/job-interview.png" alt="" />
                        <figcaption>
                            <h4>Placement Support</h4>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className='placed'>
                <h2>Our Studnets <span style={{ color: 'red' }}>Placed In</span></h2>
                <div className='company'>
                    <span style={{ backgroundColor: 'red' }}>Real Page</span>
                    <span style={{ backgroundColor: 'lightblue' }}>cyient</span>
                    <span style={{ backgroundColor: 'lightgray' }}>MedLinks</span>
                    <span style={{ backgroundColor: 'yellow' }}>Mindtree</span>
                    <span style={{ backgroundColor: 'lightpink' }}>virinchi</span>
                </div>
            </div>
        </div>
    )
}

// export default Home