import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About Me', to: 'About' },
  { name: 'Projects', to: 'project1' },
]

export default function Banner(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="sticky top-0 bg-neutral-50 dark:bg-gray-900 shadow-md z-10">
      <div className="flex justify-between items-center px-4 w-full">
        <a href="" className="pb-3 sm:pl-2">
          <img
            src="src/assets/e6d71efbc20bbbc7b0e432993a454377-sticker.png"
            alt="Max Green"
            height="60"
            width="60"
          />
        </a>
        <div className="flex space-x-4">
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
              onClick={() => {
                setMobileMenuOpen(true)
              }}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon
                className="h-6 w-6 dark:text-neutral-50"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-6 lg:pr-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-sm font-semibold leading-6 px-4 py-1 rounded-full text-gray-900 hover:bg-neutral-100 dark:text-neutral-50 dark:bg-gray-950 hover:shadow-md focus:shadow-md"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/13WBy0HqH6rgxCJ6nVieAsLzeQ4xpwcc9/view?usp=share_link"
              target="_blank"
              onClick={() => {
                setMobileMenuOpen(false)
              }}
              className="text-sm font-semibold leading-6 px-4 py-1 rounded-full text-gray-900 hover:bg-neutral-100 dark:text-neutral-50 dark:bg-gray-950 hover:shadow-md focus:shadow-md"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-50 dark:text-neutral-50 dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="" className="-m-1.5 p-1.5">
                  <img
                    src="src/assets/e6d71efbc20bbbc7b0e432993a454377-sticker.png"
                    height="60px"
                    width="60px"
                  ></img>
                  <span className="sr-only">Max Green</span>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-neutral-50"
                  onClick={() => {
                    setMobileMenuOpen(false)
                  }}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <>
                        <Link
                          key={item.name}
                          to={item.to}
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          onClick={() => {
                            setMobileMenuOpen(false)
                          }}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-neutral-50 dark:bg-gray-900"
                        >
                          {item.name}
                        </Link>
                      </>
                    ))}
                    <a
                      href="https://drive.google.com/file/d/13WBy0HqH6rgxCJ6nVieAsLzeQ4xpwcc9/view?usp=share_link"
                      target=""
                      onClick={() => {
                        setMobileMenuOpen(false)
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-neutral-50 dark:text-neutral-50 dark:bg-gray-900"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
