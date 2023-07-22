import { useState } from 'react'
import Modal from './Utilities/Modal'
import { BsArrowDown } from 'react-icons/bs'
import { SiMinutemailer } from 'react-icons/si'

const Contact = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className='relative container mx-auto md:max-w-screen-lg flex flex-col items-center justify-center mt-24 space-y-6'>
        <div className='text-6xl font-bold text-center'>Say Hi to Daniel.</div>
        <div className='text-center pb-24'>
          I would love to hear from you. Whether it&apos;s a project a job
          opportunity <br /> or just a chat. Feel free to contact me
        </div>
        <p data-aos-delay='700' className='arrow-down-contact'>
          <BsArrowDown size={24} />
        </p>

        <button
          className='openModalBtn flex items-center space-x-1 hover:bg-slate-200 px-2 py-1 transition-all duration-200 rounded cursor-pointer'
          onClick={() => {
            setOpenModal(true)
            const overflow = document
              .querySelector('body')
              .classList.toggle('overflow-inactive')
            // document.body.style.overflow = 'hidden'
            // document.body.style.filter = 'blur(20px)'
          }}
        >
          <p>Email</p> <SiMinutemailer size={18} />
        </button>
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </>
  )
}

export default Contact
