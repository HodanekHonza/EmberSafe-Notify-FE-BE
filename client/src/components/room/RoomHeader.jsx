import React, {useContext} from "react";

import EmberNotifyContext from "../../providerContext/DashboardContext.jsx";

const tabs = [{name: 'Unit Details', href: '', current: true}, {
    name: 'Back to Dashboard', href: '/dashboard', current: false
},]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function RoomHeader({calendar, nameOfRoom}) {
    const {
        setOpenDeleteRoom, setOpenEditRoom,
    } = useContext(EmberNotifyContext);
    return (<div className="relative border-b border-gray-200 pb-5 sm:pb-0">
        <div className="md:flex md:items-center md:justify-between">
            <h3 className="text-base font-semibold leading-6 text-gray-900">{nameOfRoom}'s Unit Details</h3>
            <div
                className="mt-3 flex flex-col items-start sm:flex-row md:absolute md:right-0 md:top-3 md:mt-0 gap-4">
                {calendar}
                <button
                    type="button"
                    onClick={() => setOpenEditRoom(true)}
                    className={"flex flex-row items-center border-none gap-3 rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="w-6 h-6">
                        <path
                            d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"/>
                    </svg>
                    <p>
                        Edit Room
                    </p>
                </button>
                <button
                    type="button"
                    onClick={() => setOpenDeleteRoom(true)}
                    className={"flex flex-row items-center border-none gap-3 rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="w-6 h-6">
                        <path fillRule="evenodd"
                              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                              clipRule="evenodd"/>
                    </svg>
                    <p>
                        Delete Room
                    </p>
                </button>
            </div>
        </div>
        <div className="mt-4">
            <div className="sm:hidden">
                <label htmlFor="current-tab" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="current-tab"
                    name="current-tab"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    defaultValue={tabs.find((tab) => tab.current).name}
                >
                    {tabs.map((tab) => (<option key={tab.name}>{tab.name}</option>))}
                </select>
            </div>
            <div className="hidden sm:block">
                <nav className="-mb-px flex space-x-8">
                    {tabs.map((tab) => (<a
                        key={tab.name}
                        href={tab.href}
                        className={classNames(tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium')}
                        aria-current={tab.current ? 'page' : undefined}
                    >
                        {tab.name}
                    </a>))}
                </nav>
            </div>
        </div>
    </div>)
}
