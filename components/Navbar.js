import Link from 'next/link'
import { TbExternalLink } from 'react-icons/tb'
import { Squash as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Modal from './Utilities/Modal' //Modal Import
import useSound from 'use-sound'

const Navbar = () => {
  // Modal Call State
  const [openModal, setOpenModal] = useState(false)
  const [nav, setNav] = useState(false)

  // Menu Click Sound
  const [playClick] = useSound('/sounds/Click.mp3')
  const handleClickSound = () => {
    playClick()
  }
  // ************

  const handleNav = () => {
    setNav(!nav)
    handleClickSound()

    const overflow = document.querySelector('body')
    overflow.classList.toggle('overflow-inactive')

    // const burgir = document.querySelector('.burgir')
    // burgir.classList.add('higher-index')
  }

  const overflow = () => {}

  return (
    <>
      <nav className='border-b fixed w-full bg-white z-10'>
        <div className='container mx-auto flex justify-between items-center h-16  max-w-screen-lg p-4 md:p-0'>
          <Link href='/' onClick={handleClickSound}>
            <div className='logo uppercase font-bold'>
              <img
                src='images/logo.png'
                alt='logo'
                className='h-12 drop-shadow'
              />
            </div>
          </Link>
          <ul className='hidden flex-row space-x-6 md:flex'>
            <Link href='/#projects' onClick={handleClickSound}>
              <div className='flex items-center space-x-1 hover:bg-slate-200 px-2 py-1 rounded cursor-pointer'>
                <li>Projects</li>
              </div>
            </Link>
            <Link href='#about' onClick={handleClickSound}>
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
            <Link href='/' onClick={handleClickSound}>
              <div className='flex items-center space-x-1 hover:bg-slate-200 px-2 py-1 rounded cursor-pointer'>
                <li>Resume</li>
                <TbExternalLink />
              </div>
            </Link>
          </ul>

          {/* BURGER MENU */}
          <button className='burgir md:hidden' onClick={handleNav}>
            <Hamburger toggled={nav} toggle={setNav} />
          </button>
        </div>

        {/* Modal Call */}
        {openModal && <Modal closeModal={setOpenModal} />}
      </nav>
      {/* Sidebar **************************************/}
      <div>
        <div
          className={
            nav ? 'bg-black/60 fixed top-0 left-0 w-full h-full z-20' : ''
          }
        >
          <div
            className={
              nav
                ? 'bg-[#dddddd] fixed top-0 left-0  shadow-2xl w-[100%] h-screen p-5 z-20 ease-in duration-300'
                : 'bg-[#dddddd] fixed top-0 left-[-100%] w-[-50%] h-screen p-10 z-20 ease-int duration-300'
            }
          >
            {/* NavSidebar */}
            <ul className='flex flex-col justify-center space-y-10 items-center h-full text-2xl'>
              <Link href='/#projects' onClick={handleNav}>
                <div>
                  <li>Projects</li>
                </div>
              </Link>
              <Link href='#about' onClick={handleNav}>
                <div>
                  <li>About</li>
                </div>
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
                <li>Resume</li>
                <TbExternalLink />
              </div>
              <div className='flex space-x-8' size='43px'>
                <AiFillGithub size={32} />
                <AiFillLinkedin size={32} />
              </div>
            </ul>
          </div>
        </div>
      </div>
      {/* Sidebar *************************************END*/}
    </>
  )
}

export default Navbar
