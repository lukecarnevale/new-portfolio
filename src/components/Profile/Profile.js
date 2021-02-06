import { Typography } from '@material-ui/core'
import React from 'react'

import Luke from '../../assets/images/Luke.jpg'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile container_shadow '>
      <div className='profile_name'>
        <Typography className='name'>Luke</Typography>
        <Typography className='title'>Luke</Typography>
      </div>
      <figure className='profile_image'>
        <img src={Luke} alt='' />
      </figure>

      <div className='profile_information'>
          Insert Timeline
        <br />
        <button>My button</button>
      </div>
    </div>
  )
}

export default Profile
