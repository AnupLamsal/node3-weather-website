const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&units=metric&appid=475569cf79f956ef9b00bcdc32f38b40";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.message) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "It is currently " +
          body.main.temp +
          " degrees out at given above place in " +
          body.sys.country +
          ". The situation is quite " +
          body.weather[0].description +
          "."
      );
    }
  });
};

module.exports = forecast;
