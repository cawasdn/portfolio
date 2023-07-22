import { MdClose } from 'react-icons/md'
import { SiMinutemailer, SiVuedotjs } from 'react-icons/si'
import { useState } from 'react'

async function handleOnSubmit(e) {
  e.preventDefault()
  const formData = {}
  Array.from(e.currentTarget.elements).forEach((field) => {
    if (!field.name) return
    formData[field.name] = field.value
  })
  fetch('/api/mail', {
    method: 'post',
    body: JSON.stringify(formData),
  })
  console.log(formData)
  setSucces('Email Sent')
}

const modal = ({ closeModal }) => {
  const [success, setSucces] = useState('not sent')

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

          {/* form */}
          <form method='post' onSubmit={handleOnSubmit}>
            <p>
              <label htmlfor='name'>Name</label>
            </p>
            <input
              id='name'
              type='text'
              name='name'
              placeholder='Your Name'
              required
              className='w-full bg-slate-100 h-10 p-2'
            />

            <p>
              <label htmlfor='email'>Email</label>
            </p>
            <input
              id='email'
              type='email'
              name='email'
              placeholder='Your Email'
              required
              className='w-full bg-slate-100 h-10 p-2'
            />
            <p>
              <label htmlfor='message'>Message</label>
            </p>
            <textarea
              name='message'
              id='message'
              cols='20'
              rows='3'
              placeholder='Your Message'
              className='w-full bg-slate-100 p-2 resize-none'
            ></textarea>
            <div className='md:py-2 md:mb-4 md:mt-3 rounded hover:bg-slate-200 transition-all duration-500'>
              <button
                type='submit'
                className='flex flex-row justify-center items-center w-full gap-2'
              >
                Send
                <SiMinutemailer size={18} />
              </button>
            </div>
            <a>
              <p className='text-[11px] md:tracking-wider block md:text-[15px]'>
                or use this
                <strong>
                  <span className='underline p-2 hover:bg-slate-200 rounded transition-all duration-500'>
                    decawas@gmail.com
                  </span>
                </strong>
              </p>
            </a>
            <div>{success}</div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default modal
