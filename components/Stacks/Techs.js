import { FaHtml5, FaCss3, FaReact, FaNodeJs } from 'react-icons/fa'
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from 'react-icons/si'

const Techs = () => {
  const Techs = [
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
          name: 'TailwindCss',
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
  ]
}

export default Techs
