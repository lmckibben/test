const axios = require('axios');

const apiCall = async function() {

  let activities = {}

  let response = await axios
    .get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=london+tourist+attraction&language=en&key=AIzaSyDbGykD5qCfrjRre1A0l8b4JrV3x8PDz60`,)
    .then((response) => {
      activities = response.data.results
    });
    console.log('acts', activities)
    return activities
};

module.exports = apiCall;