import React from 'react'
import Form  from '../Form.jsx'
import NavBar from '../NavBar.jsx'
import PhoneProfile from '../addLinks/phoneProfile.js'
export default function ProfilePage() {
  return (
    <div className='all'>
    < NavBar />
    <div className='main'>
        < PhoneProfile/>
        <Form/>
    </div>
  </div>
  )
}
