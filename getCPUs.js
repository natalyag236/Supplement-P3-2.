const os = require('os');


function getNumOfCPUs() {
  return os.cpus().length;
}

module.exports = { getNumOfCPUs };

