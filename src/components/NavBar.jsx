"use client";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ModeToggle } from './ButtonDarkMode';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const navigation = [
  { name: 'Home Page', href: '/', current: true },
  { name: 'Sobre mí', href: '/', current: false },
  { name: 'Portafolio', href: '#', current: false },
  { name: 'Cursos', href: '#', current: false },
  { name: 'Contacto', href: '#', current: false },
  { name: 'Recursos', href: '#', current: false },
  { name: 'FAQ', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white  dark:bg-slate-800 ">
      {({ open }) => (
        <>
          <div className="fixed top-0 left-0 w-full z-50 bg-white  dark:bg-neutral-900 ">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-[85%] max-sm:w-full">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link href="/">
                      <div className="max-[320px]:flex-col flex ">
                        <h5 className="font-bold mr-1 text-sky-700 hover:text-emerald-600 ">
                          Barreto
                        </h5>
                        <h5 className="font-bold  text-emerald-600 hover:text-sky-700">
                          Darli.
                        </h5>
                      </div>
                    </Link>
                  </motion.button>

                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-slate-700 text-sm  dark:text-white hover:border-b-[1px] hover:border-slate-300  ml-[80px]"
                              : "text-slate-700 text-sm  ml-20 dark:text-white  hover:border-b-[1px] hover:border-slate-300  hover:text-sky-700",
                            " px-3 py-5 text-sm "
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 space-x-2 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <ModeToggle />
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-600  text-white text-xs mt-20 "
                      : "text-gray-300  hover:text-white",
                    "block rounded-md px-3 py-2 text-xs font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
