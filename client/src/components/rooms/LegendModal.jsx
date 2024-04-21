import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { UpTemperature, DownTemperature, YellowAlert, RedAlert, Snowflake, NormalTemperature } from '../../assets/Icons';

export default function LegendModal({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4">
                <div className="sm:flex sm:items-start sm:justify-between">
                  <div className="sm:flex sm:items-center sm:justify-between">
                    <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900 sm:mr-4">
                      Legend
                    </Dialog.Title>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 sm:w-auto sm:flex-shrink-0 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
                <h2 className='p-2'>Status of Temperature</h2>
                <div className="mt-4">
                  <div className="flex items-center justify-start m-4 gap-3">
                    <div className="flex-shrink-0 h-8 w-8 mr-3">
                      <UpTemperature className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <p className="text-base text-gray-700">Up Temperature: Temperature is going up</p>
                  </div>
                  <div className="flex items-center justify-start m-4 gap-3">
                    <div className="flex-shrink-0 h-8 w-8 mr-3">
                      <DownTemperature className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <p className="text-base text-gray-700">Down Temperature: Temperature is going down</p>
                  </div>
                  <h2 className='p-2'>Room Treshholds</h2>
                  <div className="flex items-center justify-start m-4 gap-3">
                    <div className="flex-shrink-0 h-8 w-8 mr-3">
                      <YellowAlert className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                    </div>
                    <p className="text-base text-gray-700">Yellow Alert: Reached Hot Treshhold</p>
                  </div>
                  <div className="flex items-center justify-start m-4 gap-3">
                    <div className="flex-shrink-0 h-8 w-8 mr-3">
                      <RedAlert className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <p className="text-base text-gray-700">Red Alert: Reached Danger Treshhold</p>
                  </div>
                  <div className="flex items-center justify-start m-4 gap-3">
                    <div className="flex-shrink-0 h-8 w-8 mr-3">
                      <Snowflake className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <p className="text-base text-gray-700">Cold: Reached Cold Treshhold</p>
                  </div>
                  <div className="flex items-center justify-start m-4 gap-3">
                    <div className="flex-shrink-0 h-8 w-8 mr-3">
                      <NormalTemperature className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <p className="text-base text-gray-700">Normal: Reached Normal Treshhold</p>
                  </div>
                  {/* Add more icon meanings here */}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

