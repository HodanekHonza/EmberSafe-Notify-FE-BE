import {Snowflake, NormalTemperature, YellowAlert, RedAlert, UpTemperature, DownTemperature} from '../../assets/Icons';

export default function RoomCard({room}) {
    const temperatureIcon = getTemperatureIcon(room);
    const isTempHigher = room.isTempHigherThanBefore;

    function getTemperatureIcon(room) {
        const temperature = room.lastKnownTemperature;
        const thresholds = room.thresholds;

        if (temperature <= thresholds.thresholdCold.high && temperature >= thresholds.thresholdCold.low) {
            return <Snowflake/>;
        } else if (temperature <= thresholds.thresholdNormal.high && temperature >= thresholds.thresholdNormal.low) {
            return <NormalTemperature/>;
        } else if (temperature <= thresholds.thresholdHot.high && temperature >= thresholds.thresholdHot.low) {
            return <YellowAlert/>;
        } else if (temperature <= thresholds.thresholdDanger.high && temperature >= thresholds.thresholdDanger.low) {
            return <RedAlert/>;
        } else {
            return "?";
        }
    }

    return (
        <a href={`/dashboard/room/${room._id}`}
           className="relative bg-white overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition duration-300">
            <div className="absolute inset-0 bg-cover bg-center z-0"
                 style={{backgroundImage: `url(${room.photoOfRoom})`}}></div>
            <div className="absolute inset-0 bg-black opacity-35 z-1"></div>
            <div className="px-4 py-5 sm:p-6 relative z-10 text-white">
                <div className="flex flex-row justify-between items-center">
                    {isTempHigher ? (
                        <UpTemperature className="mr-2 h-5 w-5"/>
                    ) : (
                        <DownTemperature className="p-1 mr-2 h-10 w-10"/>
                    )}
                    <div className="flex flex-col items-end justify-center gap-1">
                        <p className="text-sm font-extrabold">Last Updated</p>
                        <p className="ml-2 text-sm">{new Date(room.lastUpdated).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                    <div>

                    </div>
                    <div className="flex flex-col items-end justify-center gap-1">
                        <p className="text-sm font-extrabold">Temperature</p>
                        <p className="text-sm">{room.lastKnownTemperature}°C</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                    <p className="text-lg font-semibold">{temperatureIcon}</p>
                    <button
                        className="flex flex-row gap-2 items-center justify-start border rounded-xl px-5 py-1 border-white bg-white text-black border-none bottom-4">
                        <p className="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500">{room.typeOfRoom}</p>
                    </button>
                </div>
            </div>
        </a>
    );
}