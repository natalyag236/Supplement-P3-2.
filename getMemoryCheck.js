const os = require('os');

function hasEnoughMemory(megabytes) {
    const totalMemory = os.totalmem();
    const requiredBytes = megabytes * 1024 * 1024; 
    return totalMemory >= requiredBytes;
}

module.exports = { hasEnoughMemory };
