import React from 'react'

export default function Contact(): JSX.Element {
  return (
    <section className="bg-neutral-50 dark:bg-gray-900 h-32">
      <div className="flex justify-center">
        <h1 className="text-3xl dark:text-neutral-50">Contact</h1>
      </div>
      <div className="flex justify-center bg-neutral-50 dark:bg-gray-900">
        <div className="grid gap-3 grid-cols-2 md:gap-4 max-w-sm lg:max-w-xl py-3">
          <a
            href="mailto:maxdgreen.dev@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-neutral-50 dark:bg-gray-800 aspect-square rounded-lg shadow-md hover:shadow-xl overflow-hidden">
              <div className="flex justify-center px-3 pt-2">
                <img src="mail.svg" alt="Email" height="90%" width="90%" />
              </div>
              <p className="text-center text-sm sm:text-md dark:text-neutral-50">
                Email
              </p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/maxwell-green-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-neutral-50 dark:bg-gray-800 aspect-square rounded-lg shadow-md hover:shadow-xl overflow-hidden">
              <div className="flex justify-center px-3 pt-2">
                <img
                  src="linkedin.svg"
                  alt="LinkedIn"
                  height="90%"
                  width="90%"
                />
              </div>
              <p className="text-center text-sm sm:text-md dark:text-neutral-50">
                LinkedIn
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
