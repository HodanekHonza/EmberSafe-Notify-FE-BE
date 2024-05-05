import {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {UpTemperature, DownTemperature, YellowAlert, RedAlert, Snowflake, NormalTemperature} from '../../assets/Icons';
import {XMarkIcon} from '@heroicons/react/24/outline'

export default function LegendSlideOver({open, setOpen}) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="absolute -inset-2.5"/>
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                Legend
                                            </Dialog.Title>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">{
                                            <div
                                                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                                <div className="px-4 pt-5 pb-4">

                                                    <h2 className='p-2'>Status of Temperature</h2>
                                                    <div className="mt-4">
                                                        <div className="flex items-center justify-start m-4 gap-3">
                                                            <div className="flex-shrink-0 h-8 w-8 mr-3">
                                                                <UpTemperature className="h-6 w-6 text-green-600"
                                                                               aria-hidden="true"/>
                                                            </div>
                                                            <p className="text-base text-gray-700">Up Temperature:
                                                                Temperature is going
                                                                up</p>
                                                        </div>
                                                        <div className="flex items-center justify-start m-4 gap-3">
                                                            <div className="flex-shrink-0 h-8 w-8 mr-3">
                                                                <DownTemperature className="h-6 w-6 text-red-600"
                                                                                 aria-hidden="true"/>
                                                            </div>
                                                            <p className="text-base text-gray-700">Down Temperature:
                                                                Temperature is going
                                                                down</p>
                                                        </div>
                                                        <h2 className='p-2'>Room Thresholds</h2>
                                                        <div className="flex items-center justify-start m-4 gap-3">
                                                            <div className="flex-shrink-0 h-8 w-8 mr-3">
                                                                <YellowAlert className="h-6 w-6 text-yellow-600"
                                                                             aria-hidden="true"/>
                                                            </div>
                                                            <p className="text-base text-gray-700">Yellow Alert: Reached
                                                                Hot
                                                                Threshold</p>
                                                        </div>
                                                        <div className="flex items-center justify-start m-4 gap-3">
                                                            <div className="flex-shrink-0 h-8 w-8 mr-3">
                                                                <RedAlert className="h-6 w-6 text-red-600"
                                                                          aria-hidden="true"/>
                                                            </div>
                                                            <p className="text-base text-gray-700">Red Alert: Reached
                                                                Danger
                                                                Threshold</p>
                                                        </div>
                                                        <div className="flex items-center justify-start m-4 gap-3">
                                                            <div className="flex-shrink-0 h-8 w-8 mr-3">
                                                                <Snowflake className="h-6 w-6 text-blue-600"
                                                                           aria-hidden="true"/>
                                                            </div>
                                                            <p className="text-base text-gray-700">Cold: Reached Cold
                                                                Threshold</p>
                                                        </div>
                                                        <div className="flex items-center justify-start m-4 gap-3">
                                                            <div className="flex-shrink-0 h-8 w-8 mr-3">
                                                                <NormalTemperature className="h-6 w-6 text-green-600"
                                                                                   aria-hidden="true"/>
                                                            </div>
                                                            <p className="text-base text-gray-700">Normal: Reached
                                                                Normal
                                                                Threshold</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }</div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

