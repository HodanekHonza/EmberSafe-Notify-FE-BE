import { DownTemperature, NormalTemperature, RedAlert, Snowflake, UpTemperature, YellowAlert } from '../../assets/Icons';


export default function RoomBlock({ room }) {
    const temperatureIcon = getTemperatureIcon(room);
    const isTemperatureHigh = room.lastKnownTemperature > room.thresholds.thresholdNormal.high;

    return (
        <a href={`/dashboard/room/${room.typeOfRoom}`} class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/src/assets/image-4.jpg" alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>
    );
}
{/* <div className='flex items-center mt-4'>
                    {isTemperatureHigh ? (
                        <>
                            <UpTemperature className='mr-2' />
                            <DownTemperature className='invisible mr-2' />
                        </>
                    ) : (
                        <>
                            <UpTemperature className='invisible mr-2' />
                            <DownTemperature className='mr-2' />
                        </>
                    )}
                    <div className='text-xl'>{room.lastKnownTemperature} °C</div>
                    <div className='ml-auto'>{temperatureIcon}</div>
                </div>
   */}
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