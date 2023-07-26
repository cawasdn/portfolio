import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Skills from './Skills'

const About = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 2000 })
  // }, [])
  return (
    <>
      <div id='about' className='h-3'></div>
      <section className='container mx-auto max-w-screen-lg p-3 mt-10 md:px-8'>
        <div id='#About' className='text-2xl font-bold pb-6'>
          About Me
        </div>
        <hr />
        {/* About Container */}
        <div data-aos='fade-up' data-aos-delay='300' data-aos-duration='500'>
          <div className='flex flex-col items-center mt-4 xl:grid xl:grid-cols-2'>
            <div className='flex flex-col text-xl items-center mb-8 md:items-start'>
              <p className='mt-3'>
                Hi! I&apos;m Daniel Cawas. I have a{' '}
                <strong>
                  passion for designing&#8218; learning&#8218; and building
                  things for the web.{' '}
                </strong>
                I like to solve design problems&#8218; create interactive
                interfaces, and{' '}
                <strong>develop web experiences and web applications. </strong>
              </p>

              <Skills />
            </div>
            <div className='mx-auto mb-6'>
              <img
                src='images/profile.png'
                alt='profile image'
                className='rounded-full'
                width={224}
                height={224}
              />
            </div>
          </div>
        </div>
        <hr />
      </section>
    </>
  )
}

export default About
