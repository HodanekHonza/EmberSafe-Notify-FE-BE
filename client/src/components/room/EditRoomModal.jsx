import { Fragment, useState, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from '../../components/Button';
import EmberNotifyContext from '../../providerContext/DashboardContext';
export default function EditRoomModal({ open, setOpen, roomData }) {
    const { updateRoomFunction } = useContext(EmberNotifyContext);
    const [formData, setFormData] = useState({
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
            [name]: parseInt(value)
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const roomData = {
                idOfRoom: roomData.idOfRoom, // Using idOfRoom from props
                photoOfRoom: roomData.photoOfRoom, // Using photoOfRoom from props
                lastKnownTemperature: roomData.lastKnownTemperature, // Keeping lastKnownTemperature as it is
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
                typeOfRoom: roomData.typeOfRoom // Using typeOfRoom from props
            };
            // Add logic here to handle the roomData object
            await updateRoomFunction(roomData);
            console.log("Form submitted:", roomData);
            setOpen(false); // Close the modal after form submission
        } catch (error) {
            console.log("Error submitting form:", error);
        }
    };


    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                <div style={{ width: "500px", margin: "0 auto" }} className='pr-4'>
                                    {/* Title form */}
                                    <div className="sm:px-0 mt-5">
                                        <h3 className="text-base font-semibold leading-7 text-gray-900">Room edit</h3>
                                        <div className='text-sm text-gray-400'>Thresholds</div>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <div className="mt-6 border-t border-gray-100">
                                            {Object.entries(formData).map(([key, value]) => (
                                                <div key={key} className="px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                                                    <div className="text-base leading-6 text-gray-900 flex items-center capitalize">{key.replace(/_/g, ' ')}:</div>
                                                    <div className='text-gray-500'>
                                                        <div className='w-1/2 float-left'>
                                                            from
                                                            <input type="number" name={key} value={value} onChange={handleChange} className='w-14 ml-2 rounded-lg text-black' placeholder='0' />
                                                        </div>
                                                        <div className='w-1/2 float-right flex justify-end items-center'>
                                                            to
                                                            <input type="number" name={key} value={formData[key]} onChange={handleChange} className='w-16 ml-2 rounded-lg text-black' placeholder='0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='w-full flex justify-center align-middle mt-5'>
                                            <Button name="Save" type="submit" />
                                        </div>
                                    </form>
                                </div>

                                <div className="mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() => setOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
