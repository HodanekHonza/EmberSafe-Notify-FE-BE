import React from 'react'
import Button from '../../components/Button'
import { DownTemperature, NormalTemperature, RedAlert, Snowflake, UpTemperature, YellowAlert } from '../../context/Icons'

export default function RoomsPage() {
    const Rooms = [
        {
            Id:1,
            RoomName:"Kithen",
            CurrentTemperature:16,
            LastTemperature: 13,
            Cold:[0, 15],
            Normal:[16, 20],
            Hot:[21, 30],
            Dangerous:[31, 99],
        },
        {
            Id:2,
            RoomName:"Gym",
            CurrentTemperature:19,
            LastTemperature: 20,
            Cold:[0, 15],
            Normal:[16, 20],
            Hot:[21, 30],
            Dangerous:[31, 99],
        },
        {
            Id:3,
            RoomName:"Hallway",
            CurrentTemperature:22,
            LastTemperature: 23,
            Cold:[0, 15],
            Normal:[16, 29],
            Hot:[30, 40],
            Dangerous:[41, 99],
        },
        {
            Id:4,
            RoomName:"Obyvak",
            CurrentTemperature:28,
            LastTemperature: 13,
            Cold:[0, 15],
            Normal:[16, 30],
            Hot:[31, 40],
            Dangerous:[51, 99],
        },
    ]
    return (
        <div>
            {/* Title and button */}
            <div className='flex ite items-start justify-between max-w-7xl mb-10 h-20' style={{margin:"0 auto"}}>
                <div className='text-3xl font-semibold'>Rooms</div>
                <div>
                    <Button href="/dashboard/room/add" name="Add new Room"/>
                </div>
            </div>
            {/* Room blocks */}
            <div className='grid grid-cols-4 gap-1 max-w-7xl' style={{margin:"0 auto"}}>
                {/* Block room */}
                {Rooms.map((Roomka)=>(
                    <a href={`/dashboard/room/${Roomka.Id}`} key={Roomka.Id} className='h-[200px] w-[300px] mb-5 rounded-2xl hover:bg-gray-200 ease-in-out duration-200 cursor-pointer ' style={{boxShadow:"4px 4px 5px rgba(0, 0, 0, 0.25), 0px 0px 20px rgba(0, 0, 0, 0.25)"}}>
                    {/* Title of room */}
                    <div className='text-3xl font-semibold w-full flex justify-center items-center h-20'>
                        {Roomka.RoomName}
                    </div>
                    {/* Icons and temperature */}
                    <div className='flex w-full h-24 justify-center items-center'>
                            {Roomka.CurrentTemperature > Roomka.LastTemperature ? 
                            (<div><UpTemperature/> <DownTemperature className="invisible"/></div>):
                            (<div><UpTemperature className="invisible"/> <DownTemperature/></div>)
                            }
                        <div className='text-3xl mx-5'>
                            {Roomka.CurrentTemperature + " °C"}
                        </div>
                        <div>
                            {Roomka.CurrentTemperature >= Roomka.Cold[0] && Roomka.CurrentTemperature <= Roomka.Cold[1]
                                ? <Snowflake/>
                                : Roomka.CurrentTemperature >= Roomka.Normal[0] && Roomka.CurrentTemperature <= Roomka.Normal[1]
                                ? <NormalTemperature/>
                                : Roomka.CurrentTemperature >= Roomka.Hot[0] && Roomka.CurrentTemperature <= Roomka.Hot[1]
                                ? <YellowAlert/>
                                : Roomka.CurrentTemperature >= Roomka.Dangerous[0] && Roomka.CurrentTemperature <= Roomka.Dangerous[1]
                                ? <RedAlert/>
                                : <RedAlert/>}
                            
                        </div>
                    </div>
                </a>
                ))}
            </div>
        </div>
    )
}
