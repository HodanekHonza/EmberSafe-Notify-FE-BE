import { Snowflake, NormalTemperature, YellowAlert, RedAlert, UpTemperature, DownTemperature } from '../../assets/Icons';

export default function RoomCard({ room }) {
    const temperatureIcon = getTemperatureIcon(room);
    const { status, trend } = getTemperatureStatusAndTrend(room);

    return (
        <a href={`/dashboard/room/${room.typeOfRoom}`} className="relative bg-white overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition duration-300">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${room.photoOfRoom})` }}></div>
            <div className="absolute inset-0 bg-black opacity-35 z-1"></div>
            <div className="px-4 py-5 sm:p-6 relative z-10 text-white">
                <div className="flex flex-row justify-between items-center">
                    {trend === 'up' ? (
                        <UpTemperature className="mr-2 h-5 w-5" />
                    ) : (
                        <DownTemperature className="p-1 mr-2 h-10 w-10" />
                    )}
                    <div className="flex flex-col items-end justify-center gap-1">
                        <p className="text-sm font-extrabold">Last Updated</p>
                        <p className="ml-2 text-sm">{new Date(room.lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                    <div className="flex flex-col items-end justify-center gap-1">
                        <p className="text-sm font-extrabold">Temperature</p>
                        <p className="text-sm">{room.lastKnownTemperature}°C</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                    <p className="text-lg font-semibold">{temperatureIcon}</p>
                    <button className="flex flex-row gap-2 items-center justify-start border rounded-xl px-5 py-1 border-white bg-white text-black hover:bg-black/50 hover:text-white border-none bottom-4">
                        <h3 className="text-lg font-extrabold leading-6">{room.typeOfRoom}</h3>
                    </button>
                </div>
            </div>
        </a>
    );
}

function getTemperatureStatusAndTrend(room) {
    const { lastKnownTemperature, thresholds } = room;
    let status, trend;

    if (lastKnownTemperature < thresholds.thresholdCold.low) {
        status = 'Cold';
    } else if (lastKnownTemperature < thresholds.thresholdNormal.low) {
        status = 'Normal';
    } else if (lastKnownTemperature < thresholds.thresholdHot.low) {
        status = 'Hot';
    } else {
        status = 'Danger';
    }

    // Assume trend based on previous temperature (for demonstration)
    trend = status === 'Hot' || status === 'Danger' ? 'up' : 'down';

    return { status, trend };
}

function getTemperatureIcon(room) {
    const temperature = room.lastKnownTemperature;
    const thresholds = room.thresholds;

    if (temperature <= thresholds.thresholdCold.high) {
        return <Snowflake />;
    } else if (temperature <= thresholds.thresholdNormal.high) {
        return <NormalTemperature />;
    } else if (temperature <= thresholds.thresholdHot.high) {
        return <YellowAlert />;
    } else if (temperature >= thresholds.thresholdDanger.low) {
        return <RedAlert />;
    } else {
        return "?";
    }
}
