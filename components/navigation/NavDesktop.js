import Link from 'next/link'
import Modal from '../Utilities/Modal' //Modal Import
import { TbExternalLink } from 'react-icons/tb'
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'

const NavDesktop = () => {
  const scrollPosition = useScrollPosition()
  const sectionPosition = useScrollPosition()

  // Modal Call State
  const [openModal, setOpenModal] = useState(false)
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
    const overflow = document.querySelector('body')
    overflow.classList.toggle('overflow-inactive')
  }

  return (
    <header
      className={
        scrollPosition > 100
          ? 'shadow fixed w-full bg-white z-10'
          : 'shadow-none fixed w-full bg-white z-10'
      }
    >
      <div>{console.log(sectionPosition)}</div>
      <nav className=''>
        <div className='mx-auto flex justify-between items-center h-16 max-w-screen-lg p-6'>
          <Link href='/'>
            <div className='logo uppercase font-bold'>
              DANIELC
              {/* <Image
                src='images/logo.png'
                alt='logo'
                className='h-12 drop-shadow'
              /> */}
            </div>
          </Link>
          <ul className='hidden flex-row space-x-6 md:flex'>
            <Link href='#projects'>
              <div className='flex items-center space-x-1 hover:bg-slate-200 px-2 py-1 rounded cursor-pointer'>
                <li>Projects</li>
              </div>
            </Link>
            <Link href='#about'>
              <div className='flex items-center space-x-1 hover:bg-slate-200 px-2 py-1 rounded cursor-pointer'>
                <li>About</li>
              </div>
            </Link>
            <div
              className='flex items-center space-x-1 hover:bg-slate-200 px-2 py-1 rounded cursor-pointer'
              //  Modal Call Button
              onClick={() => {
                setOpenModal(true)
                document
                  .querySelector('body')
                  .classList.toggle('overflow-inactive')
                // document.body.style.overflow = 'hidden'
              }}
            >
              <li>Contact</li>
            </div>
            <div className='flex items-center space-x-1 hover:bg-slate-200 px-2 py-1 rounded cursor-pointer'>
              <li>
                <a
                  href='https://firebasestorage.googleapis.com/v0/b/fir-9-2d5f7.appspot.com/o/Daniel%20Cawas%20CV.pdf?alt=media&token=813cb35b-5428-4817-bec1-95c46bcdb0bd'
                  target='_blank'
                >
                  Resume
                </a>
              </li>
              <TbExternalLink />
            </div>
            {/* </Link> */}
          </ul>

          {/* BURGER MENU */}
          <button className='burgir md:hidden' onClick={handleNav}>
            <Hamburger toggled={nav} toggle={setNav} />
          </button>
        </div>

        {/* Modal Call */}
        {openModal && <Modal closeModal={setOpenModal} />}
      </nav>
    </header>
  )
}

export default NavDesktop
