import React from 'react'
import { Outlet } from 'react-router-dom'
import Button from '../../components/Button'
import { DownTemperature, NormalTemperature, UpTemperature, YellowAlert } from '../../context/Icons'

export default function RoomsPage() {
    return (
        <div>
            {/* Title and button */}
            <div className='flex ite items-start justify-between max-w-7xl mb-10 h-12 h-20' style={{margin:"0 auto"}}>
                <div className='text-3xl font-semibold'>Rooms</div>
                <div>
                    <Button href="/dashboard/room/add" name="Add new Room"/>
                </div>
            </div>
            {/* Room blocks */}
            <div className='grid grid-cols-4 gap-1 max-w-7xl' style={{margin:"0 auto"}}>
                {/* Block room */}
                <div className='h-[200px] w-[300px] mb-5 rounded-2xl hover:bg-gray-200 ease-in-out duration-200 cursor-pointer ' style={{boxShadow:"4px 4px 5px rgba(0, 0, 0, 0.25), 0px 0px 20px rgba(0, 0, 0, 0.25)"}}>
                    {/* Title of room */}
                    <div className='text-3xl font-semibold w-full flex justify-center items-center h-20'>
                        Kitchen
                    </div>
                    {/* Icons and temperature */}
                    <div className='flex w-full h-24 justify-center items-center'>
                        <div>
                            <UpTemperature/>
                            <UpTemperature className="invisible"/>
                        </div>
                        <div className='text-3xl mx-5'>
                            25°C
                        </div>
                        <div>
                            <NormalTemperature/>
                        </div>
                    </div>
                </div>
                <div className='h-[200px] w-[300px] mb-5 rounded-2xl hover:bg-gray-200 ease-in-out duration-200 cursor-pointer ' style={{boxShadow:"4px 4px 5px rgba(0, 0, 0, 0.25), 0px 0px 20px rgba(0, 0, 0, 0.25)"}}>
                    {/* Title of room */}
                    <div className='text-3xl font-semibold w-full flex justify-center items-center h-20'>
                        Hallway
                    </div>
                    {/* Icons and temperature */}
                    <div className='flex w-full h-24 justify-center items-center'>
                        <div>
                            <UpTemperature className="invisible"/>
                            <DownTemperature/>
                        </div>
                        <div className='text-3xl mx-5'>
                            22°C
                        </div>
                        <div>
                            <NormalTemperature/>
                        </div>
                    </div>
                </div>
                <div className='h-[200px] w-[300px] mb-5 rounded-2xl hover:bg-gray-200 ease-in-out duration-200 cursor-pointer ' style={{boxShadow:"4px 4px 5px rgba(0, 0, 0, 0.25), 0px 0px 20px rgba(0, 0, 0, 0.25)"}}>
                    {/* Title of room */}
                    <div className='text-3xl font-semibold w-full flex justify-center items-center h-20'>
                        Gym
                    </div>
                    {/* Icons and temperature */}
                    <div className='flex w-full h-24 justify-center items-center'>
                        <div>
                            <UpTemperature/>
                            <DownTemperature  className="invisible"/>
                        </div>
                        <div className='text-3xl mx-5'>
                            40°C
                        </div>
                        <div>
                            <YellowAlert/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
