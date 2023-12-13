import React from 'react'
import './About.css'
import { Link,useLocation,useParams } from 'react-router-dom'
function About() {
    const color = {
        color: 'red',
    }
    // const {page} =useLocation();
    return (
        <div >
            
              <div className='nav' >
                <h1>Courses </h1>
                <Link><h3>Home <span>/</span></h3></Link>
            </div>
            <div className='about' class='text-start container-fluid p-5'>
            <h3 style={color} >"Hyderabad IT Trainings provides all software courses Classroom training & Online with 100% placements."</h3>
            <p>
                Hyderabad IT Trainings is a Hyderabad based IT Software Training & Recruitment Company delivering classroom and online trainings in India, USA and UK, Australia, Canada, Singapore. Being the leader in Software courses classroom training & online training sector, Hyderabad IT Trainings holds the top position in short time. Our core values are providing high quality and project oriented training at affordable fees. We offer classroom and online training on all technologies which are in high demand. All our trainers are IT professionals with rich experience.
            </p>
            <div className='first'>
                <img  src='https://hyderabadittrainings.com/images/course/cu-2.jpg' alt=''/>
                <div className='fi'>
                {/* <h2 style={color}>Online Training</h2>
                <p>Online training is a method of delivering training through an electronic medium without the immediate presence of a human trainer. By taking advantage of technology, Online Training can be more cost effective by delivering more knowledge in a more efficient manner. Hyderabad IT Trainings is offering Software courses online Training using its vast Technology Expertise for the benefit of the students in transforming their dreams into reality. We offer Online Software Training sessions to cater the training requirements of the Aspirants who cannot attend Classroom Training.</p> */}
                </div>
            </div>
            <div class='row'>
                <img class='col-lg-4 col-md-5 col-sm-12' src='https://hyderabadittrainings.com/images/course/cu-2.jpg' alt=''/>
                <div class='col-lg-7 col-md-7 col-sm-12'>
                <h2 style={color}>Online Training</h2>
                <p>Online training is a method of delivering training through an electronic medium without the immediate presence of a human trainer. By taking advantage of technology, Online Training can be more cost effective by delivering more knowledge in a more efficient manner. Hyderabad IT Trainings is offering Software courses online Training using its vast Technology Expertise for the benefit of the students in transforming their dreams into reality. We offer Online Software Training sessions to cater the training requirements of the Aspirants who cannot attend Classroom Training.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About