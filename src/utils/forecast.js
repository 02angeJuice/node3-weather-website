const request = require('postman-request');
require('dotenv').config();

const KEY = process.env.KEY;

const forecast = (latitude, longitude, callback) => {
  const uri = `http://api.weatherstack.com/current?access_key=${KEY}&query=${latitude},${longitude}&units=f`;

  request.get({ uri, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect weather services!', undefined);
    } else if (body.error) {
      callback('Unable to find location.', undefined);
    } else {
      const { temperature: temp, precip: pre } = body.current;

      callback(
        undefined,
        `It is currently ${temp} degrees out. There is a ${pre}% chance of rain.`
      );
    }
  });
};

module.exports = {
  forecast,
};
