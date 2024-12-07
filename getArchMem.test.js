const { expect } = require('chai');
const { getSystemInfo } = require('./getArchMem');

describe('getSystemInfo', () => {
    it('should return the correct system architecture and total memory', () => {
        const systemInfo = getSystemInfo();

        expect(systemInfo.architecture).to.be.a('string');
        expect(['x64', 'arm64', 'ia32']).to.include(systemInfo.architecture);

        expect(systemInfo.totalMemory).to.be.a('number');
        expect(systemInfo.totalMemory).to.be.greaterThan(0);
    });
});
