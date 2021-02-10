/* eslint-disable */

import {
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Portfolio.css";
import resumeData from "../../utils/resumeData";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false)


  return (
    <Grid container className="section pb_45 pt_45">
      {/* Title */}
      <Grid item className="section_title mb_30">
        <span />
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom_tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active " : "customTabs_item"
            }
          />

          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                key={1}
                label={tag}
                value={tag}
                className={
                  tabValue === "All"
                    ? "customTabs_item active "
                    : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid item>
                  <Grow in timeout={1000}>
                    <Card
                      className="custom_card"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography classname="customCard_title">
                            {project.title}
                          </Typography>
                          <Typography
                            variant='body2'
                            className="customCard_description"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog open={projectDialog} onClose={() => setProjectDialog(false)}>
      <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
      <img src='' alt=''></img>
      <DialogContent>
        {projectDialog.description}
      </DialogContent>
      <DialogActions>
        {projectDialog?.links?.map(link => (
          <a href={link.link} target='_blank'>{link.icon}</a>
        ))}
      </DialogActions>
    </Dialog>
    </Grid>
  );
};

export default Portfolio;
