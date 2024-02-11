
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Login from './Login'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Listing', href: '/Listing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div >
      <header className="bg-gray-300 absolute inset-x-0 top-0 z-50">
        <nav className=" flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1 ">
            
            <a href='/'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            </a>
            <a href='/'>
             <h1 className='text-lg ml-1 font-mono'>RealtyHub</h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="hover:bg-blue-300 w-24 text-center rounded text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/Login" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-blue-300 w-24 text-center rounded ">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>


        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
            
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                <a
                    href="#"
                    className="-mx-3 hover:bg-blue-300 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900"
                  >
                    <Login />
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      
    </div>
  )
}





/*
import React from "react";

export default function Navbar() {
  return (
    <nav className="">
        <header className="py-4 shadow-sm bg-white">
            <div className="container flex items-center justify-between">
             
                <a href="#">
                    <img src="" alt="" />
                </a>

                 <div className="w-full max-w-xl relative">
                      <span className="absolute left-4 top-3 text-lg text-gray-400">
                          <a className="fas fa-search"></a>
                      </span>
                      <input type="text" className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-1-md focus:outline-none" placeholder="search" />
                    <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition ">Search</button> 
                  </div>

                
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="far fa-heart"></i>
                        </div>
                        <div className="text-xs leading-3">Wish List</div>
                    </a>
                </div>

            </div>

        </header>
    </nav>
  )
}

*/

