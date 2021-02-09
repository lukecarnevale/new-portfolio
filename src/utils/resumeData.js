import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import { AssignmentOutlined, GitHub, Language, WebOutlined, YouTube } from '@material-ui/icons'

export default {
  name: 'Luke Carnevale',
  title: 'Full-Stack Developer',

  birthday: 'July 22 1992',
  email: 'lukecarnevale19@gmail.com',
  location: 'Wilmington, NC',
  phone: '(908) 458-2200',

  socials: {
    Facebook: {
      link: 'https://www.facebook.com/luke.carnevale',
      text: 'Facebook',
      icon: <FacebookIcon />
    },
    Linkedin: {
      link: 'https://www.linkedin.com/in/lucas-carnevale/',
      text: 'LinkedIn',
      icon: <LinkedInIcon />
    },
    Twitter: {
      link: 'https://twitter.com/LukeCarnevale',
      text: 'Twitter',
      icon: <TwitterIcon />
    },
    GitHub: {
      link: 'https://github.com/lukecarnevale',
      text: 'GitHub',
      icon: <GitHubIcon />
    }
  },

  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  experiences: [
    {
      title: 'Work 1',
      date: '2019 - Present',
      description: "Did stuff and thing for someone during this time and executed flawessly. Marketed through various avenues to objectively grow the company into a fortune 500 enterprise. Yeah, we did pretty well. That's all that needs to be said"
    },
    {
      title: 'Work 2',
      date: '2017 - 2019',
      description: "Did stuff and thing for someone during this time and executed flawessly. Marketed through various avenues to objectively grow the company into a fortune 500 enterprise. Yeah, we did pretty well. That's all that needs to be said"
    },
    {
      title: 'Work 3',
      date: 'Aug 2016 - May 2017',
      description: "Did stuff and thing for someone during this time and executed flawessly. Marketed through various avenues to objectively grow the company into a fortune 500 enterprise. Yeah, we did pretty well. That's all that needs to be said"
    }
  ],

  education: [
    {
      title: 'education 1',
      date: '2019 - Present',
      description: "Did stuff and thing for someone during this time and executed flawessly. Marketed through various avenues to objectively grow the company into a fortune 500 enterprise. Yeah, we did pretty well. That's all that needs to be said"
    },
    {
      title: 'education 2',
      date: '2017 - 2019',
      description: "Did stuff and thing for someone during this time and executed flawessly. Marketed through various avenues to objectively grow the company into a fortune 500 enterprise. Yeah, we did pretty well. That's all that needs to be said"
    },
    {
      title: 'education 3',
      date: 'Aug 2016 - May 2017',
      description: "Did stuff and thing for someone during this time and executed flawessly. Marketed through various avenues to objectively grow the company into a fortune 500 enterprise. Yeah, we did pretty well. That's all that needs to be said"
    }
  ],

  service: [
    {
      title: 'Web Development',
      description: 'I have been developing the webs for many eions',
      icon: <WebOutlined />
    },
    {
      title: 'Branding Identity',
      description: 'I have been developing the webs for many eions',
      icon: <AssignmentOutlined />
    },
    {
      title: 'Dakine Services',
      description: 'I have been developing the webs for many eions',
      icon: <WebOutlined />
    }
  ],

  skills: [
    {
      title: 'FRONT-END',
      description: [
        'ReactJS',
        'Javascript',
        'Typescript',
        'Bootstrap',
        'Material UI'
      ]
    },
    {
      title: 'BACK-END',
      description: [
        'NodeJS',
        'Python',
        'Django'
      ]
    },
    {
      title: 'DATABASES',
      description: [
        'MySQL',
        'Ms SQL Server',
        'MongoDB'
      ]
    },
    {
      title: 'SOURCE CONTROL',
      description: [
        'Git',
        'GitHub',
        'SCRUM/Agile'
      ]
    }
  ],

  projects: [
    {
      tag: 'React',
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN',
      title: 'React Project 1',
      description: 'This is my project description. Please fill it in',
      links: [
        { link: 'https://www.google.com', icon: <YouTube /> },
        { link: 'https://www.google.com', icon: <GitHub /> },
        { link: 'https://www.google.com', icon: <Language /> }
      ]
    },
    {
      tag: 'React',
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN',
      title: 'React Project 2',
      description: 'This is my project description. Please fill it in',
      links: [
        { link: 'https://www.google.com', icon: <YouTube /> },
        { link: 'https://www.google.com', icon: <GitHub /> },
        { link: 'https://www.google.com', icon: <Language /> }
      ]
    },
    {
      tag: 'Python',
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN',
      title: 'Python Project 1',
      description: 'This is my project description. Please fill it in',
      links: [
        { link: 'https://www.google.com', icon: <YouTube /> },
        { link: 'https://www.google.com', icon: <GitHub /> },
        { link: 'https://www.google.com', icon: <Language /> }
      ]
    },
    {
      tag: 'Javascript',
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN',
      title: 'JS Project 1',
      description: 'This is my project description. Please fill it in',
      links: [
        { link: 'https://www.google.com', icon: <YouTube /> },
        { link: 'https://www.google.com', icon: <GitHub /> },
        { link: 'https://www.google.com', icon: <Language /> }
      ]
    }
  ]
}
