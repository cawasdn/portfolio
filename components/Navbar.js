import Link from 'next/link'

import { TbExternalLink } from 'react-icons/tb'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
    <nav className='border-b fixed w-full bg-white z-50 '>
      <div className='container mx-auto flex justify-between items-center h-16  max-w-screen-lg p-4 md:p-0'>
        <Link href='/'>
          <div className='logo uppercase font-bold'>
            <img
              src='images/logo.png'
              alt='logo'
              className='h-12 drop-shadow'
            />
          </div>
        </Link>
        <ul className='hidden flex-row space-x-6 md:flex'>
          <Link href='/#projects'>
            <div className='flex items-center space-x-1 hover:bg-slate-200 px-2 py-1 rounded cursor-pointer'>
              <li>Projects</li>
            </div>
          </Link>
          <Link href='#about'>
            <div className='flex items-center space-x-1 hover:bg-slate-200 px-2 py-1 rounded cursor-pointer'>
              <li>About</li>
            </div>
          </Link>
          <div className='flex items-center space-x-1 hover:bg-slate-200 px-2 py-1 rounded cursor-pointer'>
            <li>Contact</li>
          </div>
          <div className='flex items-center space-x-1 hover:bg-slate-200 px-2 py-1 rounded cursor-pointer'>
            <li>Resume</li>
            <TbExternalLink />
          </div>
        </ul>
        <button className='md:hidden'>
          <GiHamburgerMenu size='40px' />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
