const os = require('os');


function getSystemInfo() {
    return {
        architecture: os.arch(),
        totalMemory: os.totalmem(),
    };
}

module.exports = { getSystemInfo };
