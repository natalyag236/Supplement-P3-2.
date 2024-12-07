const getNumberOfCPUs = require('./getCPUs');
const { expect } = require('chai');

describe('getNumOfCPUs', function() {
    it('should return the number of CPUs', function() {
        const cpus = getNumOfCPUs();
        expect(cpus).to.be.greaterThan(0); 
    });
});
