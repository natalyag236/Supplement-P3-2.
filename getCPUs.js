const os = require('os');

/**
 * Function to return the number of CPUs on the machine.
 * @returns {number} The number of CPUs.
 */
function getNumOfCPUs() {
  return os.cpus().length;
}

module.exports = { getNumOfCPUs };

