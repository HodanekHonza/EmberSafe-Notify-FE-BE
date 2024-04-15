import React, { useEffect, useState } from "react";
import RotateDeg, { CurTempInfo, getColorFromGradient } from "./componentsFunction/TemperatureMetrFunction";

export default function TemperatureMetr({RoomData}){    
        const [arrowColor, setArrowColor] = useState('');
        useEffect(() => {
          const arrowColor = getColorFromGradient((RoomData.CurrentTemperature * 100) / (RoomData.Cold[0] + RoomData.Dangerous[1]), RoomData);
          setArrowColor(arrowColor);
        }, [RoomData]);

        
        
    return(
        <div className="w-[500px] h-[500px] relative">
            
            {/* Rouded line */}
            <div className="bg-blue-300 h-full w-full absolute rounded-full"
                style={{background:` linear-gradient(to right,  rgb(30,87,153) 0%,rgb(77,239,45) ${(((RoomData.Cold[1] - RoomData.Cold[0]) + (RoomData.Normal[1] - RoomData.Normal[0])) * 100) / (RoomData.Cold[0] + RoomData.Dangerous[1])}%,rgb(242,234,21) ${(((RoomData.Cold[1] - RoomData.Cold[0]) + (RoomData.Normal[1] - RoomData.Normal[0]) + (RoomData.Hot[1] - RoomData.Hot[0])) * 100) / (RoomData.Cold[0] + RoomData.Dangerous[1])}%,rgb(255,0,0) 100%)`}}
            >
                {/* Backgroud white */}
                <div className="w-[95%] h-[95%] bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className=" w-[100%] bg-white rounded-[00px] h-[50%] absolute top-[50%] left-1/2 -translate-x-1/2"></div>

                {/* Arrow */}
                <div className=" w-full h-2 absolute top-1/2  -translate-y-1/2 duration-200 ease-in-out" style={{rotate:`${RotateDeg(RoomData)}deg`}}>
                    <div className=" h-8 w-8 rounded-full absolute -left-[12px] -top-[12px] border-4 border-white" style={{ backgroundColor: arrowColor }}></div>
                </div>
            </div>

            {/* Temperatures data */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-[96px] duration-200" style={{color:CurTempInfo(RoomData)[0]}}>{RoomData.CurrentTemperature}°C</div>
                <div className="text-4xl -mt-4 duration-200" style={{color:CurTempInfo(RoomData)[0]}}>{CurTempInfo(RoomData)[1]}</div>
                <div className="text-base">Last update: 13:30</div>
            </div>
        </div>
    )
}