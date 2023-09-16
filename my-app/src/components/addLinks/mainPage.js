import React from 'react'
import EditLinks from './editLinks'
import PhoneProfile from './phoneProfile'
import NavBar from '../NavBar'
export default function MainPage() {
  return (
      <div className='all'>
        < NavBar/>
        <div className='main'>
            < PhoneProfile/>
            < EditLinks/>
        </div>
      </div>
  )
}
