import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'

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
  }
}
