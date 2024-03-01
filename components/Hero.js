import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

import "aos/dist/aos.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Hero = () => {
  return (
    <>
      <section className="container relative mx-auto flex flex-col justify-center items-center text-left min-h-[100vh] max-w-screen-lg md:min-h-[100vh] ">
        <div className="p-4 md:pl-16 xl:pl-3 translate-y-[-60px]">
          <h2
            className="text-3xl font-bold md:text-7xl"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            Hello&#8218; I&apos;m Daniel.
          </h2>
          <p
            className="text-xl pt-4 md:text-4xl md:leading-[50px]"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            {/* I am a frontend Developer&#8218; currently focused on building
            beautiful web interfaces and web applications. */}
            I am a Software Engineer&#8218; currently focused on building
            beautiful web interfaces and web applications.
          </p>
          <div
            className="flex flex-col flex-start pt-4 md:pt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"
          >
            <div className="flex space-x-3">
              <Tippy content="Github Profile">
                <Link href="https://github.com/cawasdn" target="_blank">
                  <AiFillGithub
                    size={40}
                    className="hover:bg-slate-200 rounded"
                  />
                </Link>
              </Tippy>
              <Tippy content="Linkedin Profile">
                <Link
                  href="https://www.linkedin.com/in/daniel-cawas-20034a2a9/"
                  target="_blank"
                >
                  <AiFillLinkedin
                    size={40}
                    className="hover:bg-slate-200 rounded"
                  />
                </Link>
              </Tippy>
            </div>
            <div
              className="space-x-3 mt-2 md:mt-5 md:text-xl md:space-x-8"
              // data-aos='fade-up'
              // data-aos-delay='500'
              // data-aos-duration='500'
            >
              <Link href="#projects">
                <button className="hover:bg-slate-200">
                  Look at my work &#8595;
                </button>
              </Link>
              <button className="hover:bg-slate-200">
                <Link
                  href="https://firebasestorage.googleapis.com/v0/b/fir-9-2d5f7.appspot.com/o/DanielCawasCV---.pdf?alt=media&token=f3d60860-0712-4270-8e75-277291f308b8"
                  target="_blank"
                >
                  View Resume
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* MouseAnimation */}
        <div className="absolute bottom-0">
          <div className="scroll-down">
            <div className="mouse">
              <span></span>
            </div>
            <div className="arrow">
              <span></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
