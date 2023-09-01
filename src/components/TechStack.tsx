import React from 'react'

export default function TechStack(): JSX.Element {
  return (
    <section>
      <div className="flex relative z-10 bg-neutral-50 dark:bg-gray-900 justify-between px-5 py-2 sm:p-10">
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-3 md:gap-4 max-w-sm lg:max-w-4xl">
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-neutral-100 dark:bg-gray-800 aspect-square rounded-lg shadow-md hover:shadow-xl overflow-hidden hover:scale-125">
              <div className="flex justify-center px-3 pt-3 lg:pt-4 xl:pt-5">
                <img
                  src="typescript.svg"
                  alt="TypeScript"
                  height="85%"
                  width="85%"
                />
              </div>
              <p className="text-center text-transparent font-semibold text-xs sm:text-md xl:text-xl sm:pt-1 2xl:pt-2 bg-clip-text bg-gradient-to-r from-blue-300 to-purple-900">
                TypeScript
              </p>
            </div>
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <div className="bg-neutral-100 dark:bg-gray-800 aspect-square rounded-lg shadow-md hover:shadow-xl overflow-hidden hover:scale-125">
              <div className="flex justify-center px-3 pt-3 lg:pt-5">
                <img src="react.svg" alt="React" height="90%" width="90%" />
              </div>
              <p className="text-center text-transparent font-semibold text-xs sm:text-md xl:text-xl pt-1 sm:p-1.5 md:pt-2 2xl:pt-5 bg-clip-text bg-gradient-to-r from-blue-300 to-purple-900">
                React
              </p>
            </div>
          </a>
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-neutral-100 dark:bg-gray-800 aspect-square rounded-lg shadow-md hover:shadow-xl overflow-hidden hover:scale-125">
              <div className="flex justify-center px-3 pt-3">
                <img src="vite.svg" alt="Vite" height="90%" width="90%" />
              </div>
              <p className="text-center text-transparent font-semibold text-xs sm:text-md xl:text-xl lg:pt-1 bg-clip-text bg-gradient-to-r from-blue-300 to-purple-900">
                Vite
              </p>
            </div>
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-neutral-100 dark:bg-gray-800 aspect-square rounded-lg shadow-md hover:shadow-xl overflow-hidden hover:scale-125">
              <div className="flex justify-center px-3 pt-3 lg:pt-4">
                <img src="nextjs.svg" alt="Next.js" height="85%" width="85%" />
              </div>
              <p className="text-center text-transparent font-semibold text-xs sm:text-md xl:text-xl sm:pt-1 2xl:pt-3 bg-clip-text bg-gradient-to-r from-blue-300 to-purple-900">
                Next.js 13
              </p>
            </div>
          </a>
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-neutral-100 dark:bg-gray-800 aspect-square rounded-lg shadow-md hover:shadow-xl overflow-hidden hover:scale-125">
              <div className="flex justify-center px-3 pt-3">
                <img src="node.svg" alt="Node.js" height="90%" width="90%" />
              </div>
              <p className="text-center text-transparent font-semibold text-xs sm:text-md xl:text-xl bg-clip-text bg-gradient-to-r from-blue-300 to-purple-900">
                Node.js
              </p>
            </div>
          </a>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-neutral-100 dark:bg-gray-800 aspect-square rounded-lg shadow-md hover:shadow-xl overflow-hidden hover:scale-125">
              <div className="flex justify-center px-3 pt-3">
                <img src="mongo.svg" alt="MonoDB" height="90%" width="90%" />
              </div>
              <p className="text-center text-transparent font-semibold text-xs sm:text-md xl:text-xl lg:pt-1 bg-clip-text bg-gradient-to-r from-blue-300 to-purple-900">
                MongoDB
              </p>
            </div>
          </a>
        </div>
        <div className="self-center max-w-md md:max-w-2xl pl-4 sm:pl-10">
          <h1 className="text-blue-800 dark:text-neutral-50 font-semibold text-2xl sm:text-5xl 2xl:text-6xl max-w-fit">
            Current tech stack.
          </h1>
          <p className="text-blue-800 dark:text-neutral-50 text-xs sm:text-lg lg:text-2xl 2xl:text-3xl pt-2 sm:pt-6 w-auto">
            My stack focuses on blazing fast web design. Using modern frameworks
            and libraries, combined with a fundamental understanding of coding
            concepts and design conventions.{' '}
          </p>
        </div>
      </div>
    </section>
  )
}
