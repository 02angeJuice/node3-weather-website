const request = require('postman-request');
const config = require('../../config');

const TOKEN = process.env.TOKEN;

const geocode = (address, callback) => {
  const uri = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${TOKEN}`;

  request.get({ uri, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect location services!', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try again another search.', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = {
  geocode,
};
