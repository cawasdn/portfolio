import { MdClose } from 'react-icons/md'
import { SiMinutemailer } from 'react-icons/si'

const modal = ({ closeModal }) => {
  return (
    <div className='modalBackground fixed left-0 right-0 h-screen bottom-0 z-50 bg-slate-300/80 flex justify-center items-center'>
      <div
        className='modalContainer bg-white h-full w-full p-10 relative rounded-lg shadow-lg md:h-[580px] md:w-[500px]'
        data-aos='zoom-in'
        data-aos-delay=''
        data-aos-duration='600'
      >
        <div>
          <button
            onClick={() => {
              document.body.style.overflow = 'visible'
              closeModal(false)
            }}
            className='absolute right-4 top-4 font-bold hover:bg-slate-200 hover:rounded-full p-1'
          >
            <MdClose size={32} />
          </button>
        </div>

        <div className='title font-bold text-2xl mb-7'>
          <h1>Get in Touch</h1>
        </div>
        <div className='body flex flex-col gap-3'>
          <p>Name</p>
          <input
            type='text'
            placeholder='Your Name'
            required
            className='w-full bg-slate-100 h-10 p-2'
          />
          <p>Email</p>
          <input
            type='Email'
            placeholder='Your Email'
            required
            className='w-full bg-slate-100 h-10 p-2'
          />
          <p>Message</p>
          <textarea
            name=''
            id=''
            cols='30'
            rows='5'
            placeholder='Your Message'
            required
            className='w-full bg-slate-100'
          ></textarea>
          <div className='mt-5 p-2 rounded hover:bg-slate-200 transition-all duration-500'>
            <button className='flex flex-row justify-center items-center w-full gap-2'>
              <p>Send</p> <SiMinutemailer size={18} />
            </button>
          </div>
          <a href='' className='hover:underline'>
            <p className='tracking-normal md:tracking-wider'>
              or use this - decawas@gmail.com
            </p>
          </a>
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
