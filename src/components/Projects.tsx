import React from 'react'
import DividerTop from './DividerTop'
import DividerBottom from './DividerBottom'

export default function Projects(): JSX.Element {
  return (
    <>
      <section id="project1">
        <DividerTop />
        <div className="flex flex-col h-[450px] md:h-[600px] lg:h-[800px] justify-center items-center self-center flex-grow bg-gradient-to-b from-black to-blue-800">
          <div className="flex justify-center items-center bg-neutral-100 dark:bg-gray-800 shadow-lg rounded-xl w-4/6 h-auto">
            <h1 className="text-blue-800 dark:text-neutral-50 p-6 sm:p-14 text-xl lg:text-4xl">
              Project - This is a placeholder
            </h1>
          </div>
        </div>
        <DividerBottom />
        <div className="flex space-x-4 justify-center py-3 relative -mt-20 z-auto">
          <a href="" target="_blank" rel="noopener noreferrer">
            <div className="bg-blue-700 rounded-2xl shadow-md py-2 px-3 sm:p-3">
              <span className="text-center text-white font-semibold text-xs sm:text-lg xl:text-xl">
                Demo
              </span>
            </div>
          </a>
          <a
            href="https://github.com/MaxwellGr33n?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-[40px] md:w-[52px]">
              <img src="github-mark.svg" height="auto" width="auto" />
            </div>
          </a>
        </div>
        <div className="bg-neutral-50 dark:bg-gray-900 px-10 pt-4 pb-10 mt-4 sm:mt-0">
          <h1 className="dark:text-neutral-50 font-semibold text-lg sm:text-2xl">
            A Brief description of my project
          </h1>
          <p className="dark:text-neutral-50 text-sm sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            ea rerum deserunt tempora nobis ad, dolorem, sequi quo in ipsam nemo
            similique nam? Eius inventore quisquam doloremque modi quidem.
            Corporis ut voluptates quam, quia vero magnam necessitatibus minima
            atque commodi praesentium, recusandae nobis vitae repudiandae facere
            quas perferendis. Assumenda nostrum, molestias sint illo iure
            veritatis dicta maxime ipsam velit?
          </p>
        </div>
      </section>

      <section id="project2">
        <DividerTop />
        <div className="flex flex-col h-[450px] md:h-[600px] lg:h-[800px] justify-center items-center self-center flex-grow bg-gradient-to-t from-black to-blue-800">
          <div className="flex justify-center items-center bg-neutral-100 dark:bg-gray-800 shadow-lg rounded-xl w-4/6 h-auto">
            <h1 className="text-blue-800 dark:text-neutral-50 p-6 sm:p-14 text-xl lg:text-4xl">
              Project - This is a placeholder
            </h1>
          </div>
        </div>
        <DividerBottom />
        <div className="flex space-x-4 justify-center py-3 relative -mt-20 z-auto">
          <a href="" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-700 rounded-2xl shadow-md py-2 px-3 sm:p-3">
              <span className="text-center text-white font-semibold text-xs sm:text-lg xl:text-xl">
                Demo
              </span>
            </button>
          </a>
          <a
            href="https://github.com/MaxwellGr33n?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-[40px] md:w-[52px]">
              <img src="github-mark.svg" height="auto" width="auto" />
            </div>
          </a>
        </div>
        <div className="bg-neutral-50 dark:bg-gray-900 px-10 pt-4 pb-10 mt-4 sm:mt-0">
          <h1 className="dark:text-neutral-50 font-semibold text-lg sm:text-2xl">
            A Brief description of my project
          </h1>
          <p className="dark:text-neutral-50 text-sm sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            ea rerum deserunt tempora nobis ad, dolorem, sequi quo in ipsam nemo
            similique nam? Eius inventore quisquam doloremque modi quidem.
            Corporis ut voluptates quam, quia vero magnam necessitatibus minima
            atque commodi praesentium, recusandae nobis vitae repudiandae facere
            quas perferendis. Assumenda nostrum, molestias sint illo iure
            veritatis dicta maxime ipsam velit?
          </p>
        </div>
      </section>

      <section id="project3">
        <DividerTop />
        <div className="flex flex-col h-[450px] md:h-[600px] lg:h-[800px] justify-center items-center self-center flex-grow bg-gradient-to-b from-black to-blue-800">
          <div className="flex justify-center items-center bg-neutral-50 dark:bg-gray-800 shadow-lg rounded-xl w-4/6 h-auto">
            <h1 className="text-blue-800 dark:text-neutral-100 p-6 sm:p-14 text-xl lg:text-4xl">
              Project - This is a placeholder
            </h1>
          </div>
        </div>
        <DividerBottom />
        <div className="flex space-x-4 justify-center py-3 relative -mt-20 z-auto">
          <a href="" target="_blank" rel="noopener noreferrer">
            <div className="bg-blue-700 rounded-2xl shadow-md py-2 px-3 sm:p-3">
              <span className="text-center text-white font-semibold text-xs sm:text-lg xl:text-xl">
                Demo
              </span>
            </div>
          </a>
          <a
            href="https://github.com/MaxwellGr33n?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-[40px] md:w-[52px]">
              <img src="github-mark.svg" height="auto" width="auto" />
            </div>
          </a>
        </div>
        <div className="bg-neutral-50 dark:bg-gray-900 px-10 pt-4 pb-10 mt-4 sm:mt-0">
          <h1 className="dark:text-neutral-50 font-semibold text-lg sm:text-2xl">
            A Brief description of my project
          </h1>
          <p className="dark:text-neutral-50 text-sm sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            ea rerum deserunt tempora nobis ad, dolorem, sequi quo in ipsam nemo
            similique nam? Eius inventore quisquam doloremque modi quidem.
            Corporis ut voluptates quam, quia vero magnam necessitatibus minima
            atque commodi praesentium, recusandae nobis vitae repudiandae facere
            quas perferendis. Assumenda nostrum, molestias sint illo iure
            veritatis dicta maxime ipsam velit?
          </p>
        </div>
      </section>
    </>
  )
}
