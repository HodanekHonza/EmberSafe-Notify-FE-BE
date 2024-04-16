export const CurTempInfoHistory = (RoomData, TemperatureHistory) => {
  const temperature = TemperatureHistory.temp;

  if (temperature >= RoomData.thresholds.thresholdCold.low && temperature <= RoomData.thresholds.thresholdCold.high) {
    return "blue";
  } else if (temperature >= RoomData.thresholds.thresholdNormal.low && temperature <= RoomData.thresholds.thresholdNormal.high) {
    return "green";
  } else if (temperature >= RoomData.thresholds.thresholdHot.low && temperature <= RoomData.thresholds.thresholdHot.high) {
    return "orange";
  } else if (temperature >= RoomData.thresholds.thresholdDanger.low && temperature <= RoomData.thresholds.thresholdDanger.high) {
    return "red";
  } else {
    return "purple"; // Default to red for temperatures outside defined ranges
  }
};
