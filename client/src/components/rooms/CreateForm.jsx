import React, { useContext, useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import EmberNotifyContext from '../../providerContext/DashboardContext';

export default function CreateForm({ setOpen }) {
    const { createRoomFunction, setShowNotification, setIsNotificationCreate, user } = useContext(EmberNotifyContext);
    const [formData, setFormData] = useState({

        photoOfRoom:'',
        lastKnownTemperature: 0,
        thresholds: {
            thresholdCold: { low: 5, high: 15 }, 
            thresholdNormal: { low: 16, high: 25 },
            thresholdHot: { low: 26, high: 35 }, 
            thresholdDanger: { low: 36, high: 50 } 
        },
        typeOfRoom: ''
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
            const roomData = {
                userId: user.id,
                photoOfRoom: formData.photoOfRoom,
                lastKnownTemperature: 0,
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
                },
                typeOfRoom: formData.typeOfRoom
            };
            console.log(roomData)
            await createRoomFunction(roomData);
            setOpen(false)
            setIsNotificationCreate(true)
            setShowNotification(true)
            console.log("Form submitted:", roomData);
        } catch (error) {
            console.log("Error submitting form:", error);
        }
    };
    return (
        <div>
            <div className="sm:px-0 text-center mt-5">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Create new Room</h3>
            </div>
            <form className="max-w-full sm:max-w-xl mx-auto" onSubmit={handleSubmit}>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="typeOfRoom" id="typeOfRoom" value={formData.typeOfRoom} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                    <label htmlFor="typeOfRoom" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type Of Room</label>
                </div>
                     <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="photoOfRoom" id="photoOfRoom" value={formData.photoOfRoom} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                    <label htmlFor="photoOfRoom" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo Of Room</label>
                </div>
                <div className="mt-6 border-t border-gray-100">
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

                {/* <div className="col-span-full mb-1">
                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                        Cover photo
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div> */}

                <button type="submit" className="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}
