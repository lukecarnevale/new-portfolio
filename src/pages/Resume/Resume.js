import React from 'react'
import './Resume.css'
import { Grid, Typography } from '@material-ui/core'
import resumeData from '../../utils/resumeData'

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
      <Grid container className='section' />
      {/* Services */}
      <Grid container className='section' />
      {/* Contact */}
      <Grid container className='section' />
    </>
  )
}

export default Resume
