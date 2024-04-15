export const getColorFromGradient = (percent, RoomData) => {
    const colors = [
      { percent: 0, color: 'rgb(30,87,153)' },
      { percent: (((RoomData.Cold[1] - RoomData.Cold[0]) + (RoomData.Normal[1] - RoomData.Normal[0])) * 100) / (RoomData.Cold[0] + RoomData.Dangerous[1]), color: 'rgb(77,239,45)' },
      { percent: (((RoomData.Cold[1] - RoomData.Cold[0]) + (RoomData.Normal[1] - RoomData.Normal[0]) + (RoomData.Hot[1] - RoomData.Hot[0])) * 100) / (RoomData.Cold[0] + RoomData.Dangerous[1]), color: 'rgb(242,234,21)' },
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
      // Якщо не вдалося отримати значення, повертаємо білий колір
      return 'rgb(255, 255, 255)';
    }
  
    const color = {
      r: Math.floor(parseInt(lowerRgb[0]) + rangePercent * (parseInt(upperRgb[0]) - parseInt(lowerRgb[0]))),
      g: Math.floor(parseInt(lowerRgb[1]) + rangePercent * (parseInt(upperRgb[1]) - parseInt(lowerRgb[1]))),
      b: Math.floor(parseInt(lowerRgb[2]) + rangePercent * (parseInt(upperRgb[2]) - parseInt(lowerRgb[2]))),
    };
  
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
  };
export const CurTempInfo = (RoomData) => RoomData.CurrentTemperature >= RoomData.Cold[0] && RoomData.CurrentTemperature <= RoomData.Cold[1]
? ["blue", "Cold"]
: RoomData.CurrentTemperature >= RoomData.Normal[0] && RoomData.CurrentTemperature <= RoomData.Normal[1]
? ["green", "Normal"]
: RoomData.CurrentTemperature >= RoomData.Hot[0] && RoomData.CurrentTemperature <= RoomData.Hot[1]
? ["orange", 'Hot']
: RoomData.CurrentTemperature >= RoomData.Dangerous[0] && RoomData.CurrentTemperature <= RoomData.Dangerous[1]
? ["red", "Dangerous"]
: ["red", "Dangerous"];