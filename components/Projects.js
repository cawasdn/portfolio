import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
// import { Slider } from './ImageSlider'
import { Slider, Slider2 } from './ImageSlider'
import Link from 'next/link'

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <>
      <div id='projects' className='h-12'></div>
      <section className='mx-auto px-2 max-w-screen-lg md:px-8'>
        <div
          className='text-2xl font-bold py-6'
          // data-aos="fade-up"
          // data-aos-delay="200"
          // data-aos-duration="500"
        >
          Projects
        </div>
        <hr />
        <div className=''>
          <div className='flex flex-col gap-8 md:flex md:flex-col md:gap-8 my-8 mb-0'>
            {/* item 2  */}
            <div
              className='flex flex-col space-y-4 md:flex-row'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='500'
            >
              <div className='grid gap-8 justify-center md:grid md:grid-cols-1 md:mb-10 xl:grid-cols-2'>
                <div className='space-y-5'>
                  <div className='Portfolio text-2xl font-bold'>Audiio.com</div>
                  <div className='md:text-xl'>
                    <p>
                      audiio.com is a music site that has tons of music to offer
                      to film makers it has incredible music and license that
                      covers any video platform in the universe.
                    </p>
                  </div>
                  <div className='space-x-6 text-gray-500'>
                    <span>#Nextjs</span>
                    <span>#TailwindCSS</span>
                  </div>
                  <div className='space-x-4'>
                    <div className='space-x-6 [&>*]:p-2 [&>*]:bg-slate-700 [&>*]:rounded text-white'>
                      <Link href='https://audiio.com' target='_blank'>
                        <button>Live Demo</button>
                      </Link>
                      <Link href='https://audiio.com' target='_blank'>
                        <button>Code Repo</button>
                      </Link>
                    </div>
                  </div>
                </div>

                <Slider2 />
                {/* <img
                  src='images/portfolio-1.jpg'
                  alt=''
                  className=' w-[500px]  border-2'
                /> */}
              </div>
            </div>

            {/* item 1 */}
            <div
              className='flex flex-col gap-3 md:flex-row'
              data-aos='fade-up'
              data-aos-delay='300'
              data-aos-duration='500'
            >
              <div className='grid gap-8 justify-center md:grid md:grid-cols-1 md:mb-10 xl:grid-cols-2'>
                <div className='space-y-5'>
                  <div className='Portfolio text-2xl font-bold'>Portfolio</div>
                  <div className='md:text-xl'>
                    <p>
                      A minimalist website portfolio for software engineers that
                      is very fast and has a responsive design, good SEO, and
                      functionality that showcases projects in a clean and
                      effective way.
                    </p>
                  </div>
                  <div className='space-x-6 text-gray-500'>
                    <span>#Nextjs</span>
                    <span>#TailwindCSS</span>
                  </div>
                  <div className='space-x-4'>
                    <div className='space-x-6 [&>*]:p-2 [&>*]:bg-slate-700 [&>*]:rounded text-white'>
                      <Link href='https://audiio.com' target='_blank'>
                        <button>Live Demo</button>
                      </Link>
                      <Link href='https://audiio.com' target='_blank'>
                        <button>Code Repo</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <Slider />
                {/* <img
                  src='images/portfolio-1.jpg'
                  alt=''
                  className=' w-[500px]  border-2'
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
