import { MdClose } from 'react-icons/md'
import { SiMinutemailer } from 'react-icons/si'
import { useEffect } from 'react'

import useSound from 'use-sound'

// md:h-[580px] md:w-[500px]
// h-full w-full

const modal = ({ closeModal }) => {
  // Menu Click Sound
  const [playClick] = useSound('/sounds/Click.mp3')
  const handleContactClickSound = () => {
    playClick()
  }
  // ************
  useEffect(() => {
    handleContactClickSound()
  }, [playClick])

  return (
    <div className='modalBackground fixed left-0 right-0 h-screen bottom-0 z-50 bg-black/60 flex justify-center items-center'>
      <div
        className='modalContainer bg-white p-0 relative rounded-lg shadow-lg top-[50px] md:top-0'
        data-aos='zoom-in'
        data-aos-delay=''
        data-aos-duration='600'
      >
        <div>
          <button
            onClick={() => {
              // document.body.style.overflow = 'visible'
              closeModal(false)
              document
                .querySelector('body')
                .classList.remove('overflow-inactive')
            }}
            className='absolute right-4 top-4 font-bold hover:bg-slate-200 hover:rounded-full p-1'
          >
            <MdClose size={32} />
          </button>
        </div>

        {/* Modal Form */}
        <div className='m-10 w-[200px] h-[400px] md:w-[500px] md:h-[450px]'>
          <div className='title font-bold text-2xl mb-7'>
            <h1>Get in Touch</h1>
          </div>
          <div className='body flex flex-col gap-3'>
            <div>
              <p>Name</p>
              <input
                type='text'
                placeholder='Your Name'
                required
                className='w-full bg-slate-100 h-10 p-2'
              />
            </div>
            <div>
              <p>Email</p>
              <input
                type='Email'
                placeholder='Your Email'
                required
                className='w-full bg-slate-100 h-10 p-2'
              />
            </div>
            <div>
              <p>Message</p>
              <textarea
                name=''
                id=''
                cols='20'
                rows='3'
                placeholder='Your Message'
                required
                className='w-full bg-slate-100 p-2 resize-none'
              ></textarea>
            </div>

            <div className='md:py-2 md:mb-4 md:mt-3 rounded hover:bg-slate-200 transition-all duration-500'>
              <button className='flex flex-row justify-center items-center w-full gap-2'>
                <p>Send</p> <SiMinutemailer size={18} />
              </button>
            </div>
            <a href='' className=''>
              <p className='text-[11px] md:tracking-wider block md:text-[15px]'>
                or use this -
                <strong>
                  <span className='underline p-2 hover:bg-slate-200 rounded transition-all duration-500'>
                    decawas@gmail.com
                  </span>
                </strong>
              </p>
            </a>
          </div>
        </div>
        {/* <div className='footer'>
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button>Continue</button>
        </div> */}
      </div>
    </div>
  )
}

export default modal
