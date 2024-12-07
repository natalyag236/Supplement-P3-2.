const os = require('os');
/**
 * Function to determine whether the system has enough memory to allocate the specified amount in MB.
 * @param {number} megabytes - The number of megabytes to check for availability.
 * @returns {boolean} True if enough memory is available, false otherwise.
 */
function hasEnoughMemory(megabytes) {
    const totalMemory = os.totalmem();
    const requiredBytes = megabytes * 1024 * 1024; 
    return totalMemory >= requiredBytes;
}

module.exports = { hasEnoughMemory };
