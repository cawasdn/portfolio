import { FaHtml5, FaCss3, FaReact, FaNodeJs } from 'react-icons/fa'
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from 'react-icons/si'

export const Techs = [
  {
    first: [
      {
        name: 'HTML',
        logo: <FaHtml5 />,
      },
      {
        name: 'CSS',
        logo: <FaCss3 />,
      },
      {
        name: 'JavaScript',
        logo: <SiJavascript />,
      },
    ],
    second: [
      {
        name: 'Reactjs',
        logo: <FaReact />,
      },
      {
        name: 'Nextjs',
        logo: <SiNextdotjs />,
      },
      {
        name: 'Tailwind',
        logo: <SiTailwindcss />,
      },
    ],
    third: [
      {
        name: 'Nodejs',
        logo: <FaNodeJs />,
      },
      {
        name: 'ExpressJs',
        logo: <SiExpress />,
      },
      {
        name: 'MongoDB',
        logo: <SiMongodb />,
      },
    ],
  },

  {
    four: [
      {
        name: 'Pangalan',
        logo: <SiMongodb />,
      },
    ],
  },
]
