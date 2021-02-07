import { Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

import resumeData from '../../utils/resumeData'
import Luke from '../../assets/images/Luke.jpg'
import './Profile.css'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent'

const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className='timeline_content'>
        {link ? (
          <Typography className='timelineItem_text'>
            <span>{title}:</span>{' '}
            <a href={link} target='_blank' rel='noopener noreferrer'>
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className='timelineItem_text'>
            <span>{title}:{' '}</span>{text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  )
}

const Profile = () => {
  return (
    <div className='profile container_shadow '>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>
      <figure className='profile_image'>
        <img src={Luke} alt='' />
      </figure>

      <div className='profile_information'>
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title='Title' text={resumeData.title} />
          <CustomTimelineItem title='Location' text={resumeData.location} />
          <CustomTimelineItem title='Email' text={resumeData.email} />
          <CustomTimelineItem title='Phone' text={resumeData.phone} />

        </CustomTimeline>
        <br />
        <button>My button</button>
      </div>
    </div>
  )
}

export default Profile
