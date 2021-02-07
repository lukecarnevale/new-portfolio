/* eslint-disable */

import React from 'react'
import './Resume.css'
import { Grid, Typography } from '@material-ui/core'
import resumeData from '../../utils/resumeData'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineContent from '@material-ui/lab/TimelineContent'

const Resume = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span />
          <h6 className='section_title_text'>About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
        </Grid>
      </Grid>
      {/* Education and Experience */}
      <Grid container className='section'>
        <Grid item className='section_title mb_30'>
          <span />
          <h6 className='section_title_text'>Resume</h6>
        </Grid>

        <Grid items xs={12}>
          <Grid container className='resume_timeline'>
            {/* Experience */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title='Work Experience' icon={<WorkIcon />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title' >{experience.title}</Typography>
                      <Typography variant='caption' className='timeline_date' >{experience.date}</Typography>
                      <Typography variant='body2' className='timeline_description' >{experience.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title='Education History' icon={<SchoolIcon />}>
                {resumeData.education.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title' >{education.title}</Typography>
                      <Typography variant='caption' className='timeline_date' >{education.date}</Typography>
                      <Typography variant='body2' className='timeline_description' >{education.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services */}
      <Grid container className='section' />
      {/* Contact */}
      <Grid container className='section' />
    </>
  )
}

export default Resume
