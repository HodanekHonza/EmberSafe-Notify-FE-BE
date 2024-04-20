import { DownTemperature, NormalTemperature, RedAlert, Snowflake, UpTemperature, YellowAlert } from '../../assets/Icons';
import { Fragment } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid'; // Icons

export default function RoomCard({ room }) {
    const temperatureIcon = getTemperatureIcon(room);
    const isTemperatureHigh = room.lastKnownTemperature > room.thresholds.thresholdNormal.high;

    return (
        <a href={`/dashboard/room/${room.typeOfRoom}`} key={room._id} className="relative bg-white overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition duration-300">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZ1qsJb2XIowb4eiPaMINDLYh16JAK2sc3VlgXl8iVg&s')` }}></div>
            <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
            <div className="px-4 py-5 sm:p-6 relative z-10 text-white">
                <div className='flex flex-row justify-between'>
                    {getTemperatureStatusAndTrend(room).trend === 'up' ? (
                        <UpTemperature className='mr-2 h-5 w-5' />
                    ) : (
                        <DownTemperature className='p-1 mr-2 h-10 w-10' />
                    )}
                    <div className="flex flex-col  items-end justify-center gap-1">
                        <p className="text-sm font-extrabold">Last Updated</p>
                        <p className="ml-2 text-sm">{new Date(room.lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                    {/* SELF CLOSING HELPER DIV SO TEMPERATURE STAYS ON OTHER SIDE */}
                    <div/ >                    
                    <div className='flex flex-col items-end justify-center gap-1'>
                        <p className="text-sm font-extrabold">Temperature</p>
                        <p className="text-sm ">{room.lastKnownTemperature}°C</p>
                    </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <div className='flex flex-row'>

                        <p className="text-lg font-semibold">
                            {temperatureIcon}
                        </p>
                    </div>


                    <button className="flex flex-row gap-2 items-center justify-start border rounded-xl px-5 py-1 border-white bg-white text-black hover:bg-black/50 hover:text-white border-none bottom-4">
                        <h3 className="text-lg font-extrabold leading-6">{room.typeOfRoom}</h3>
                        <div className='text-2xl mb-2'>🛋️</div>
                    </button>
                </div>
            </div>
        </a>




    );
}
// <a href={`/dashboard/room/${room.typeOfRoom}`} className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
//     <div className='p-4'>
//         <div className='text-xl font-semibold'>{room.typeOfRoom}</div>
//         <div className='flex items-center mt-4'>
//             {isTemperatureHigh ? (
//                 <>
//                     
//                     <DownTemperature className='invisible mr-2' />
//                 </>
//             ) : (
//                 <>
//                     <UpTemperature className='invisible mr-2' />
//                    
//                 </>
//             )}
//             <div className='text-xl'>{room.lastKnownTemperature} °C</div>
//             <div className='ml-auto'>{temperatureIcon}</div>
//         </div>
//     </div>
// </a>

function getTemperatureStatusAndTrend(room) {
    const { temperature, threshold } = room;
    let status, trend;

    if (temperature < threshold) {
        status = 'Cold';
    } else if (temperature < 30) {
        status = 'Normal';
    } else if (temperature < 90) {
        status = 'Hot';
    } else {
        status = 'Danger';
    }

    // Assume trend based on previous temperature (for demonstration)
    trend = temperature > threshold ? 'up' : 'down';

    return { status, trend };
}

function getTemperatureIcon(room) {
    const temperature = room.lastKnownTemperature;
    if (temperature >= room.thresholds.thresholdCold.low && temperature <= room.thresholds.thresholdCold.high) {
        return <Snowflake />;
    } else if (temperature >= room.thresholds.thresholdNormal.low && temperature <= room.thresholds.thresholdNormal.high) {
        return <NormalTemperature />;
    } else if (temperature >= room.thresholds.thresholdHot.low && temperature <= room.thresholds.thresholdHot.high) {
        return <YellowAlert />;
    } else if (temperature >= room.thresholds.thresholdDanger.low && temperature <= room.thresholds.thresholdDanger.high) {
        return <RedAlert />;
    } else {
        return <NormalTemperature />;
    }
}