import { Grid, Tabs, Tab } from '@material-ui/core'
import React, { useState } from 'react'
import './Portfolio.css'
import resumeData from '../../utils/resumeData'

const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All')

  return (
    <Grid container className='section pb_45 pt_45'>
      {/* Title */}
      <Grid item className='section_title mb_30'>
        <span />
        <h6 className='section_title_text'>Portfolio</h6>
      </Grid>

      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor='white'
          className='custom_tabs'
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label='All'
            value='All'
            className={
              tabValue === 'All' ? 'customTabs_item active ' : 'customTabs_item'
            }
          />

          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                key={1}
                label={tag}
                value={tag}
                className={
                  tabValue === 'All'
                    ? 'customTabs_item active '
                    : 'customTabs_item'
                }
              />
            )
          )}
        </Tabs>
      </Grid>
    </Grid>
  )
}

export default Portfolio
