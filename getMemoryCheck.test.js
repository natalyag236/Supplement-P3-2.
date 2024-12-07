
const { expect } = require('chai');
const { hasEnoughMemory } = require('./getMemoryCheck');
describe('hasEnoughMemory', () => {
    it('should return true if the system has enough memory to allocate the specified amount', () => {
        const allocationMB = 100; 
        const result = hasEnoughMemory(allocationMB);
        expect(result).to.be.true;
    });
    it('should return false if the system does not have enough memory to allocate the specified amount', () => {
        const allocationMB = Number.MAX_SAFE_INTEGER; 
        const result = hasEnoughMemory(allocationMB);
        expect(result).to.be.false;
    });
});
