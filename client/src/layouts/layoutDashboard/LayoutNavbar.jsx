import {useContext} from 'react'
import {Disclosure, Menu} from '@headlessui/react'

import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/react/24/outline'
import {useUser} from '@clerk/clerk-react'
import LegendSlideOver from '../../components/rooms/LegendSlideOver.jsx'
import CreateRoomModal from '../../components/rooms/CreateRoomModal'
import EmberNotifyContext from '../../providerContext/DashboardContext'

import {
    UserButton,
} from "@clerk/clerk-react";

const navigation = [


    {name: 'Dashboard', href: '/dashboard', current: true},
    {name: 'Landing Page', href: '/', current: false},
    // {name: 'Notification History', href: '/', current: false},
]

const navigationFooter = [
    {
        name: 'X',
        href: 'https://x.com/14JSX14',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
            </svg>
        ),
    },
    {
        name: 'GitHub',
        href: 'https://github.com/HodanekHonza/EmberSafe-Notify-FE-BE/',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'YouTube',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function LayoutNavBar({content}) {
    const {openCreateRoom, setOpenCreateRoom, openLegend, setOpenLegend} = useContext(EmberNotifyContext);
    const {user} = useUser();
    if (user === undefined) {
        return
    }
    return (
        <>
            <div className="min-h-full">
                <div className="bg-indigo-600 pb-32">
                    <Disclosure as="nav"
                                className="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none">
                        {({open}) => (
                            <>
                                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                                    <div
                                        className="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                                        <div className="flex items-center px-2 lg:px-0">
                                            <div className="flex-shrink-0">
                                                {/*<img*/}
                                                {/*    className="block h-8 w-8"*/}
                                                {/*    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"*/}
                                                {/*    alt="Your Company"*/}
                                                {/*/>*/}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                     fill="currentColor" className="w-8 h-8 text-white">
                                                    <path
                                                        d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z"/>
                                                    <path fillRule="evenodd"
                                                          d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                                                          clipRule="evenodd"/>
                                                </svg>


                                            </div>
                                            <div className="hidden lg:ml-10 lg:block">
                                                <div className="flex space-x-4">
                                                    {navigation.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? 'bg-indigo-700 text-white'
                                                                    : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                                                                'rounded-md py-2 px-3 text-sm font-medium'
                                                            )}
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            <div
                                                                className='flex flex-row gap-2 justify-center items-center'>
                                                                {item.name === "Dashboard" ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                         viewBox="0 0 24 24" strokeWidth={1.5}
                                                                         stroke="currentColor" className="w-4 h-4">
                                                                        <path strokeLinecap="round"
                                                                              strokeLinejoin="round"
                                                                              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                                                                    </svg> : <></>}
                                                                {item.name === "Landing Page" ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                         viewBox="0 0 24 24" fill="currentColor"
                                                                         className="w-4 h-4">
                                                                        <path fillRule="evenodd"
                                                                              d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z"
                                                                              clipRule="evenodd"/>
                                                                    </svg>
                                                                    : <></>}
                                                                {item.name}
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 justify-center gap-5 px-2 lg:ml-6 lg:justify-end">
                                        </div>
                                        <div className="flex lg:hidden">
                                            {/* Mobile menu button */}
                                            <Disclosure.Button
                                                className="relative inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                                                <span className="absolute -inset-0.5"/>
                                                <span className="sr-only">Open main menu</span>
                                                {open ? (
                                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                                ) : (
                                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                        <div className="hidden lg:ml-4 lg:block">
                                            <div className="flex items-center">
                                                <button
                                                    type="button"
                                                    className="relative flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                                                >
                                                </button>

                                                {/* Profile dropdown */}
                                                <Menu as="div" className="relative ml-3 flex-shrink-0">
                                                    <UserButton/>
                                                </Menu>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Disclosure.Panel className="lg:hidden">
                                    <div className="space-y-1 px-2 pb-3 pt-2">
                                        {navigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-indigo-700 text-white'
                                                        : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                                                    'block rounded-md py-2 px-3 text-base font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                    <div className="border-t border-indigo-700 pb-3 pt-4">
                                        <div className="flex items-center px-5">
                                            <div className="flex-shrink-0">
                                                <UserButton/>
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-base font-medium text-white">{user.fullName}</div>
                                                <div
                                                    className="text-sm font-medium text-indigo-300">{user.emailAddress}</div>
                                            </div>
                                            <button
                                                type="button"
                                                className="relative ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                                            >
                                                <span className="absolute -inset-1.5"/>
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true"/>
                                            </button>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )
                        }
                    </Disclosure>
                    <header className="py-5">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-white">EmberNotify</h1>
                        </div>
                    </header>
                </div>
                {/* LEGEND FOR TELLING USERS WHICH ICONS ARE WHICH FOR CLARIFICATION */}
                <LegendSlideOver open={openLegend} setOpen={setOpenLegend}/>
                <CreateRoomModal open={openCreateRoom} setOpen={setOpenCreateRoom}/>
                <main className="-mt-32">
                    <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                        <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">{content}</div>
                    </div>
                </main>
            </div>
            <footer className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="flex justify-center space-x-6 md:order-2">
                        {navigationFooter.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true"/>
                            </a>
                        ))}
                    </div>
                    <div className="mt-8 md:order-1 md:mt-0">
                        <p className="text-center text-xs leading-5 text-gray-500">
                            &copy; 2024 EmberNotify, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}