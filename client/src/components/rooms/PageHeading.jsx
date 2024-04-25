import {Fragment, useContext} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {EllipsisVerticalIcon} from '@heroicons/react/20/solid'

import EmberNotifyContext from "../../providerContext/DashboardContext.jsx";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
//test
export default function PageHeading() {
    const {

        setOpenLegend,
        setOpenCreateRoom,

    } = useContext(EmberNotifyContext);
    return (
        <div className="px-3 pb-4 sm:px-6 lg:px-4">
            <div className="mx-auto flex items-center justify-between gap-x-8 lg:mx-0">
                <div className="flex items-center gap-x-6">
                    <img
                        src="https://tailwindui.com/img/logos/48x48/tuple.svg"
                        alt=""
                        className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
                    />
                    <h1>
                        <div className="text-sm leading-6 text-gray-500">
                            EN instance <span className="text-gray-700">#00011</span>
                        </div>
                        <div className="mt-1 text-base font-semibold leading-6 text-gray-900">Jan's units</div>
                    </h1>
                </div>
                <div className="flex items-center gap-x-2 sm:gap-x-3">
                    <div className='hidden sm:flex gap-3 flex-row items-center justify-center'>
                        {/*<button type="button" className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block">*/}
                        {/*    Copy URL*/}
                        {/*</button>*/}
                        <button
                            // onClick={() => setOpenLegend(true)}
                            type="button"
                            className='flex flex-row items-center border-none gap-3 rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm bg-indigo-600 hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"/>
                            </svg>

                            <button
                                onClick={() => setOpenLegend(true)}
                            >
                                Legend
                            </button>
                        </button>
                        <button
                              onClick={() => setOpenCreateRoom(true)}
                            type="button"
                            className="flex flex-row items-center border-none gap-3 rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                            </svg>

                            Room
                        </button>


                    </div>

                    <Menu as="div" className="relative sm:hidden">
                        <Menu.Button className="-m-3 block p-3">
                            <span className="sr-only">More</span>
                            <EllipsisVerticalIcon className="h-5 w-5 text-gray-500" aria-hidden="true"/>
                        </Menu.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                <Menu.Item>
                                    {({active}) => (
                                        <button
                                            type="button"
                                            className={classNames(
                                                active ? 'bg-gray-50' : '',
                                                'block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900'
                                            )}
                                        >
                                            Create Room
                                        </button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({active}) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-50' : '',
                                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                                            )}
                                        >

                                            Show Legend
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    )
}
