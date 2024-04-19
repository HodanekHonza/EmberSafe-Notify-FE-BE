import { DownTemperature, NormalTemperature, RedAlert, Snowflake, UpTemperature, YellowAlert } from '../../assets/Icons';
import { Fragment } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid'; // Icons

export default function RoomBlock({ room }) {
    const temperatureIcon = getTemperatureIcon(room);
    const isTemperatureHigh = room.lastKnownTemperature > room.thresholds.thresholdNormal.high;

    return (
        <a href={`/dashboard/room/${room.typeOfRoom}`} key={room._id} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold leading-6 text-gray-900">{room.typeOfRoom}</h3>
                <div className="mt-4 flex justify-between items-center">
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <p className="text-sm font-medium text-gray-600">Temperature</p>
                        <p className="text-lg font-semibold text-gray-900">{room.lastKnownTemperature}°C</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-sm font-medium text-gray-600">Last Updated</p>
                        <p className="ml-2 text-sm text-gray-500">{room.timeStamp}22:24 </p>
                    </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Status</p>
                        <p className="text-lg font-semibold text-gray-900">
                            {temperatureIcon}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-sm font-medium text-gray-600">Trend</p>
                        {getTemperatureStatusAndTrend(room).trend === 'up' ? (
                            <UpTemperature className='mr-2 h-5 w-5' />
                            // <ChevronUpIcon className="h-5 w-5 ml-2 text-red-500" />
                        ) : (
                            <DownTemperature className='p-1 mr-2  h-10 w-10' />
                            // <ChevronDownIcon className="h-5 w-5 ml-2 text-green-500" />
                        )}
                    </div>
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