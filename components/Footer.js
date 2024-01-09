import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className='h-60 text-gray-500 mt-4'>
        <div className='flex flex-col items-center  h-full justify-end '>
          <div className='flex mb-3 space-x-5 '>
            <Tippy content='Github Profile'>
              <Link href='https://github.com/cawasdn' target='_blank'>
                <AiFillGithub size={32} />
              </Link>
            </Tippy>
            <Tippy content='Linkedin Profile'>
              <Link
                href='https://www.linkedin.com/in/daniel-cawas-20034a2a9/'
                target='_blank'
              >
                <AiFillLinkedin size={32} />
              </Link>
            </Tippy>
          </div>
          <div className='mb-3'>Built and Designed by Daniel</div>
        </div>
      </footer>
    </>
  )
}

export default Footer
