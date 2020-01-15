const sum = require('./lib.js');
mocha.setup('bdd');

describe('sum', function () {
    it('should return sum of arguments', function () {
      chai.expect(sum(1, 2)).to.equal(3);
    });
    it('should return sum of arguments', function () {
        chai.expect( 2).to.equal(3);
      });
  });

  
describe('sum2', function () {
    it('should return sum of arguments', function () {
      chai.expect(1 + 2).to.equal(3);
    });
    it('should return sum of arguments', function () {
        chai.expect( 2).to.equal(3);
      });
  });
