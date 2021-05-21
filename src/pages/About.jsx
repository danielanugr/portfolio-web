import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import profilePic from '../profilepic.jpg'

export default function About ({ openAbout, setOpenAbout }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
  }, [])

  function handleClose (e) {
    setOpen(false)
    setTimeout(() => {
      setOpenAbout(false)
    }, 250)
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 overflow-hidden'
        open={open}
        onClose={setOpen}
      >
        <div className='absolute inset-0 overflow-hidden'>
          <Dialog.Overlay className='absolute inset-0' />

          <div className='fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='w-screen max-w-md'>
                <div className='h-full flex flex-col bg-white shadow-xl overflow-y-scroll'>
                  <div className='px-4 py-6 sm:px-6'>
                    <div className='flex items-start justify-between'>
                      <h2
                        id='slide-over-heading'
                        className='text-lg font-medium text-gray-900'
                      >
                        About Me
                      </h2>
                      <div className='ml-3 h-7 flex items-center'>
                        <button
                          className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500'
                          onClick={handleClose}
                        >
                          <span className='sr-only'>Close panel</span>
                          <XIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Main */}
                  <div>
                    <div className='pb-1 sm:pb-6'>
                      <div>
                        <div className='relative h-40 sm:h-56'>
                          <img
                            className='absolute h-full w-full object-cover'
                            src={profilePic}
                            alt={`Daniel's Picture`}
                          />
                        </div>
                        <div className='mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6'>
                          <div className='sm:flex-1'>
                            <div>
                              <div className='flex items-center'>
                                <h3 className='font-bold text-xl text-gray-900 sm:text-2xl'>
                                  Daniel Adhi Nugraha
                                </h3>
                                <span className='ml-2.5 bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full'>
                                  <span className='sr-only'>Online</span>
                                </span>
                              </div>
                              <p className='text-sm text-gray-500'>
                                @danielanugr
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='px-4 pt-5 pb-5 sm:px-0 sm:pt-0'>
                      <dl className='space-y-8 px-4 sm:px-6 sm:space-y-6'>
                        <div>
                          <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0'>
                            Bio
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:col-span-2'>
                            <p>
                              A freshly baked We(e)b Developer from Hacktiv8
                              Bootcamp. Have been through hell during the 4
                              months period bootcamp. Being a weeb, I love me
                              some animes and japanese music. Currently learning
                              more about web development and its tools. I'm
                              ready to start my career in Web Development!
                            </p>
                          </dd>
                        </div>
                        <div>
                          <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0'>
                            Location
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:col-span-2'>
                            South Jakarta, Jakarta, ID
                          </dd>
                        </div>
                        <div>
                          <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0'>
                            Website
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:col-span-2'>
                            danielanugr.dev
                          </dd>
                        </div>
                        <div>
                          <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0'>
                            Birthday
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:col-span-2'>
                            <time dateTime='1993-05-02'>02 May 1993</time>
                          </dd>
                        </div>
                        <div>
                          <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0'>
                            Email
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:col-span-2'>
                            danielanugr@yahoo.co.id
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
