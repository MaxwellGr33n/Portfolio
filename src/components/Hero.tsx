import React from 'react'
import DividerBottom from './DividerBottom'

export default function Hero(): JSX.Element {
  return (
    <div>
      <div className="h-[400px] sm:h-[800px] bg-gradient-to-b from-blue-800 to-black">
        <div className="py-10 sm:py-20 px-10 sm:px-24">
          <h3 className="text-neutral-200 text-opacity-70 sm:text-2xl">
            Hello my name is
          </h3>
          <h1 className="text-neutral-50 text-7xl sm:text-[234px] -mt-2 -ml-1 sm:-mt-5 sm:-ml-4">
            Max.
          </h1>
          <h2 className="text-neutral-50 -mt-2 text-lg sm:text-4xl">
            Full Stack Developer
          </h2>
        </div>
        <div
          id="About"
          className="flex justify-end pb-8 sm:pb-20 pr-6 sm:pr-20"
        >
          <p className="text-neutral-50 w-48 sm:w-[500px] text-xs sm:text-2xl">
            I’m a full stack developer based in Australia, specialising in
            building exceptional websites, applications and everything in
            between.
          </p>
        </div>
      </div>
      <DividerBottom />
    </div>
  )
}
