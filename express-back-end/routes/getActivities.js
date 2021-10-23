const apiCall = require('./api');

const getActivities = async function() {
  let results = []
  apiCall()
  .then((activities) => {
    results = activities
  })
  console.log('results', results)
  return results
};

module.exports = getActivities; 