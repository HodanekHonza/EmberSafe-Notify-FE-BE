import { Fragment, useState, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from '../../components/Button';
import EmberNotifyContext from '../../providerContext/DashboardContext';

export default function EditRoomModal({ roomData }) {
    const { updateRoomFunction, openEditRoom, setOpenEditRoom, setShowNotification, setIsNotificationCreate } = useContext(EmberNotifyContext);
    const [formData, setFormData] = useState({
        typeOfRoom: roomData.typeOfRoom,
        photoOfRoom: roomData.photoOfRoom,
        cold_from: roomData.thresholds.thresholdCold.low,
        cold_to: roomData.thresholds.thresholdCold.high,
        normal_from: roomData.thresholds.thresholdNormal.low,
        normal_to: roomData.thresholds.thresholdNormal.high,
        hot_from: roomData.thresholds.thresholdHot.low,
        hot_to: roomData.thresholds.thresholdHot.high,
        dangerous_from: roomData.thresholds.thresholdDanger.low,
        dangerous_to: roomData.thresholds.thresholdDanger.high,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name.includes("_from") || name.includes("_to") ? parseInt(value) : value
        }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const roomDataFinal = {
                photoOfRoom: formData.photoOfRoom,
                typeOfRoom: formData.typeOfRoom,
                thresholds: {
                    thresholdCold: {
                        low: formData.cold_from,
                        high: formData.cold_to
                    },
                    thresholdNormal: {
                        low: formData.normal_from,
                        high: formData.normal_to
                    },
                    thresholdHot: {
                        low: formData.hot_from,
                        high: formData.hot_to
                    },
                    thresholdDanger: {
                        low: formData.dangerous_from,
                        high: formData.dangerous_to
                    }
                }
            };
            await updateRoomFunction(roomDataFinal);
            console.log("Form submitted:", roomDataFinal);
            setOpenEditRoom(false);
            setIsNotificationCreate(false);
            setShowNotification(true)
        } catch (error) {
            console.log("Error submitting form:", error);
        }
    };

    return (
        <Transition.Root show={openEditRoom} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-y-auto" onClose={setOpenEditRoom}>
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full sm:max-w-xl">
                            <form onSubmit={handleSubmit}>
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="sm:px-0 text-center mt-5">
                                        <h3 className="text-base font-semibold leading-7 text-gray-900">Edit Room</h3>
                                    </div>
                                    <div className="mt-6 border-t border-gray-100">
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input type="text" name="typeOfRoom" value={formData.typeOfRoom} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder="Type of Room" required />
                                            <label htmlFor="typeOfRoom" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type of Room</label>
                                        </div>
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input type="text" name="photoOfRoom" value={formData.photoOfRoom} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder="Photo of Room" required />
                                            <label htmlFor="photoOfRoom" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo of Room</label>
                                        </div>
                                        <div className="px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                                            <div className="text-base leading-6 text-gray-900 flex items-center">Cold</div>
                                            <div className='text-gray-500'>
                                                <div className='w-1/2 float-left'>
                                                    from
                                                    <input type="number" name="cold_from" value={formData.cold_from} onChange={handleChange} className='w-14 ml-2 rounded-lg text-black' placeholder='0' />
                                                </div>
                                                <div className='w-1/2 float-right flex justify-end items-center'>
                                                    to
                                                    <input type="number" name="cold_to" value={formData.cold_to} onChange={handleChange} className='w-16 ml-2 rounded-lg text-black' placeholder='0' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                                            <div className="text-base leading-6 text-gray-900 flex items-center">Normal</div>
                                            <div className='text-gray-500'>
                                                <div className='w-1/2 float-left'>
                                                    from
                                                    <input type="number" name="normal_from" value={formData.normal_from} onChange={handleChange} className='w-14 ml-2 rounded-lg text-black' placeholder='0' />
                                                </div>
                                                <div className='w-1/2 float-right flex justify-end items-center'>
                                                    to
                                                    <input type="number" name="normal_to" value={formData.normal_to} onChange={handleChange} className='w-16 ml-2 rounded-lg text-black' placeholder='0' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                                            <div className="text-base leading-6 text-gray-900 flex items-center">Hot</div>
                                            <div className='text-gray-500'>
                                                <div className='w-1/2 float-left'>
                                                    from
                                                    <input type="number" name="hot_from" value={formData.hot_from} onChange={handleChange} className='w-14 ml-2 rounded-lg text-black' placeholder='0' />
                                                </div>
                                                <div className='w-1/2 float-right flex justify-end items-center'>
                                                    to
                                                    <input type="number" name="hot_to" value={formData.hot_to} onChange={handleChange} className='w-16 ml-2 rounded-lg text-black' placeholder='0' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                                            <div className="text-base leading-6 text-gray-900 flex items-center">Dangerous</div>
                                            <div className='text-gray-500'>
                                                <div className='w-1/2 float-left'>
                                                    from
                                                    <input type="number" name="dangerous_from" value={formData.dangerous_from} onChange={handleChange} className='w-14 ml-2 rounded-lg text-black' placeholder='0' />
                                                </div>
                                                <div className='w-1/2 float-right flex justify-end items-center'>
                                                    to
                                                    <input type="number" name="dangerous_to" value={formData.dangerous_to} onChange={handleChange} className='w-16 ml-2 rounded-lg text-black' placeholder='0' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button type="submit" className="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center sm:ml-3 w-full sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                                    <button type="button" onClick={() => setOpenEditRoom(false)} className="text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center sm:mt-0 mt-2 w-full sm:w-auto">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
