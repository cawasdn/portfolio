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
      <section className='container mx-auto border-b max-w-screen-lg p-3 mt-10'>
        <div
          id='#About'
          className='border-b text-2xl font-bold py-6'
          // data-aos="fade-up"
          // data-aos-delay="300"
          // data-aos-duration="500"
        >
          About Me
        </div>
        {/* About Container */}
        <div data-aos='fade-up' data-aos-delay='300' data-aos-duration='500'>
          <div className='flex flex-col items-center md:flex-row md:justify-between md:mt-8'>
            <div className='flex flex-col text-xl items-center mb-8 md:w-[600px] md:items-start '>
              <p className='mt-3'>
                Hi! I'm Daniel Cawas. I have a{' '}
                <strong>
                  passion for designing, learning, and building things for the
                  web.{' '}
                </strong>
                I like to solve design problems, create interactive interfaces,
                and{' '}
                <strong>develop web experiences and web applications. </strong>
              </p>
              <div className='mt-8'>
                {' '}
                Here are the technologies I've been working with.
              </div>

              <Skills />
            </div>
            <div className='md:pr-8 mb-10'>
              <img
                src='images/profile.webp'
                alt=''
                className='rounded-full h-56'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
