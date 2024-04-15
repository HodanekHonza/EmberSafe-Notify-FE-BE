export const CurTempInfoHistory = (RoomData, TemperatureHistory) => {
  
    if (TemperatureHistory.Temperature >= RoomData.Cold[0] && TemperatureHistory.Temperature <= RoomData.Cold[1]) {
      return "#4497e5";
    } else if (TemperatureHistory.Temperature >= RoomData.Normal[0] && TemperatureHistory.Temperature <= RoomData.Normal[1]) {
      return "#29a53a";
    } else if (TemperatureHistory.Temperature >= RoomData.Hot[0] && TemperatureHistory.Temperature <= RoomData.Hot[1]) {
      return "orange";
    } else if (TemperatureHistory.Temperature >= RoomData.Dangerous[0] && TemperatureHistory.Temperature <= RoomData.Dangerous[1]) {
      return "#d80000";
    } else {
      return "#d80000";
    }
  
}