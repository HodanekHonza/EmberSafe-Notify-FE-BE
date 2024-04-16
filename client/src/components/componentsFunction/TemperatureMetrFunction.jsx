// PRASARNA OF VASYLA, pomocne funkce maji mit svuj vlastni file a urcite nemixuji export default a export meyi funkcemi...



export default function RotateDeg(RoomData) {
  const Rotate = (RoomData.lastKnownTemperature * 180) / (RoomData.thresholds.thresholdCold.low + RoomData.thresholds.thresholdDanger.high);
  if (Rotate <= 0) {
    return 0;
  } else if (Rotate >= 180) {
    return 180;
  } else {
    return Rotate;
  }
}


export const getColorFromGradient = (percent, RoomData) => {
  const thresholds = RoomData.thresholds;
  percent < 0 ? (percent = 0) : percent;
  const colors = [
    { percent: 0, color: 'rgb(30,87,153)' },
    { percent: (((thresholds.thresholdCold.high - thresholds.thresholdCold.low) + (thresholds.thresholdNormal.high - thresholds.thresholdNormal.low)) * 100) / (thresholds.thresholdCold.low + thresholds.thresholdDanger.high), color: 'rgb(77,239,45)' },
    { percent: (((thresholds.thresholdCold.high - thresholds.thresholdCold.low) + (thresholds.thresholdNormal.high - thresholds.thresholdNormal.low) + (thresholds.thresholdHot.high - thresholds.thresholdHot.low)) * 100) / (thresholds.thresholdCold.low + thresholds.thresholdDanger.high), color: 'rgb(242,234,21)' },
    { percent: 100, color: 'rgb(255,0,0)' },
  ];

  let lowerColor = { percent: 0, color: 'rgb(255,255,255)' };
  let upperColor = { percent: 100, color: 'rgb(255,255,255)' };

  for (let i = 0; i < colors.length; i++) {
    if (colors[i].percent <= percent && colors[i].percent >= lowerColor.percent) {
      lowerColor = colors[i];
    }
    if (colors[i].percent >= percent && colors[i].percent <= upperColor.percent) {
      upperColor = colors[i];
    }
  }

  const range = upperColor.percent - lowerColor.percent;
  const rangePercent = range !== 0 ? (percent - lowerColor.percent) / range : 0;

  const lowerRgb = lowerColor.color.match(/\d+/g);
  const upperRgb = upperColor.color.match(/\d+/g);

  if (!lowerRgb || !upperRgb) {
    // Return white color if values cannot be obtained
    return 'rgb(30,87,153)';
  }

  const color = {
    r: Math.floor(parseInt(lowerRgb[0]) + rangePercent * (parseInt(upperRgb[0]) - parseInt(lowerRgb[0]))),
    g: Math.floor(parseInt(lowerRgb[1]) + rangePercent * (parseInt(upperRgb[1]) - parseInt(lowerRgb[1]))),
    b: Math.floor(parseInt(lowerRgb[2]) + rangePercent * (parseInt(upperRgb[2]) - parseInt(lowerRgb[2]))),
  };

  return `rgb(${color.r}, ${color.g}, ${color.b})`;
};




export const CurTempInfo = (RoomData) => {
  const currentTemperature = RoomData.lastKnownTemperature;
  const thresholds = RoomData.thresholds;

  if (currentTemperature <= thresholds.thresholdCold.high) {
    return ["blue", "Cold"];
  } else if (currentTemperature >= thresholds.thresholdNormal.low && currentTemperature <= thresholds.thresholdNormal.high) {
    return ["green", "Normal"];
  } else if (currentTemperature >= thresholds.thresholdHot.low && currentTemperature <= thresholds.thresholdHot.high) {
    return ["orange", 'Hot'];
  } else if (currentTemperature >= thresholds.thresholdDanger.low) {
    return ["red", "Dangerous"];
  } else {
    return ["red", "Dangerous"];
  }
};
