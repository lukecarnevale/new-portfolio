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
  },

  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
