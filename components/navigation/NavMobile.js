import Link from 'next/link'
import Modal from '../Utilities/Modal' //Modal Import
import { TbExternalLink } from 'react-icons/tb'
import { Squash as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { useScrollPosition } from '../../hooks/useScrollPosition'

const NavMobile = () => {
  // BurgerMenu
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  const scrollPosition = useScrollPosition()

  // Modal Call
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <nav
        className={
          scrollPosition > 90
            ? 'bg-white shadow fixed flex justify-between  items-center h-16 w-full p-4 z-10'
            : 'bg-white shadow-none fixed flex justify-between  items-center h-16 w-full p-4 z-10'
        }
      >
        <Link href='/'>
          <div className='logo uppercase font-bold'>
            DANIELC
            {/* <img
              src='images/logo.png'
              alt='logo'
              className='h-12 drop-shadow'
            /> */}
          </div>
        </Link>
        <div
          className={
            nav
              ? 'fixed top-0 right-0 left-0 bottom-0 bg-black/60 z-20 duration-300'
              : 'duration-300'
          }
        >
          <ul
            className={
              nav
                ? 'fixed bg-white shadow-2xl top-0 right-0 h-full w-[70%] translate-x-[0%] ease-in duration-300 z-20'
                : 'fixed bg-white shadow-2xl top-0 right-0 h-full w-[70%] translate-x-[100%] ease-in duration-200 z-20'
            }
          >
            <div className='flex flex-col items-center justify-center h-full space-y-10 z-20 text-2xl'>
              <Link href='/#projects' onClick={handleNav}>
                <li>Projects</li>
              </Link>
              <Link href='#about' onClick={handleNav}>
                <li>About</li>
              </Link>
              <div
                //  Modal Call Button
                onClick={() => {
                  setOpenModal(true)
                  setNav(!nav)
                }}
              >
                <li>Contact</li>
              </div>
              <div className='flex items-center space-x-1' onClick={handleNav}>
                <li>
                  <Link
                    href='https://firebasestorage.googleapis.com/v0/b/fir-9-2d5f7.appspot.com/o/Daniel%20Cawas%20CV.pdf?alt=media&token=813cb35b-5428-4817-bec1-95c46bcdb0bd'
                    target='_blank'
                  >
                    Resume
                  </Link>
                </li>
                <TbExternalLink />
              </div>
              <div className='flex space-x-5'>
                <Link href='https://github.com/cawasdn' target='_blank'>
                  <AiFillGithub size={32} />
                </Link>

                <Link
                  href='https://www.linkedin.com/in/daniel-cawas-20034a2a9/'
                  target='_blank'
                >
                  <AiFillLinkedin size={32} />
                </Link>
              </div>
            </div>
          </ul>
        </div>

        {/* BURGER MENU */}
        <button className='z-30' onClick={handleNav}>
          <Hamburger toggled={nav} toggle={setNav} />
        </button>
        {openModal && <Modal closeModal={setOpenModal} />}
      </nav>
    </>
  )
}

export default NavMobile
