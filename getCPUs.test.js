const { getNumOfCPUs } = require('./getCPUs'); 
const chai = require('chai');
const expect = chai.expect;

describe('getNumOfCPUs', function() {
  it('should return the number of CPUs', function() {
    const numCPUs = getNumOfCPUs();
    expect(numCPUs).to.be.a('number');
    expect(numCPUs).to.be.greaterThan(0); 
  });
});
