const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const KEY = 'a8820949534b092724d07619ffb8110c';
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
