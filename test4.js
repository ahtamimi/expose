mocha.setup('bdd');
console.log('--2----', csum);
describe('sum', function () {
    it('should return sum of arguments', function () {
      chai.expect(csum(1, 2)).to.equal(3);
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
