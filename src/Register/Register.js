import React from 'react'

function Register() {
  return (
    <div class='container-fluid pd-5'>
        <div clas='row'>
            <div class='col-6 '>
              <form class='col-8 mt-3 mb-4'>
                <input  type='text' placeholder='Name'/>
                <input type='email' placeholder='Email'/>
                <input type='tel' placeholder='Phone number'/>
                <textarea placeholder='Send us Message'/>
                <input type='submit' />
              </form>
            </div>
            <div class='col-6'>

            </div>
        </div>
    </div>
  )
}

export default Register