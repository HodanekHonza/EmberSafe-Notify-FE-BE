// this mean to be pasted into node red function in gateway

if (typeof msg.payload === 'number') {

    var temp = msg.payload;
    var typeOfRoom = msg.topic.split(":")[1].split("/")[0];

    if (!flow.get(typeOfRoom)) {
        flow.set(typeOfRoom, []);
        flow.set(typeOfRoom + "_count", 0);
    }


    // Add the temperature value to the array
    flow.set(typeOfRoom, flow.get(typeOfRoom).concat(parseFloat(temp)));

    var count = flow.get(typeOfRoom + "_count") + 1;
    flow.set(typeOfRoom + "_count", count);


    if (count >= 2) {

        var sum = flow.get(typeOfRoom).reduce((a, b) => a + b, 0);
        var average = sum / 2;

        msg.payload = {
            'temp': average,
            'typeOfRoom': typeOfRoom,
            'timeStamp': new Date().toISOString()
        };


        flow.set(typeOfRoom, []);
        flow.set(typeOfRoom + "_count", 0);


        return msg;
    } else {
        // If fewer than 10 values have been collected, return nothing
        return null;
    }
}