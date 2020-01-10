
mocha.setup('bdd');

describe('sum', function () {
    it('should return sum of arguments', function () {
      chai.expect(1 + 2).to.equal(3);
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

  mocha.setup('bdd');
  let res = mocha.run();
  script= document.createElement("div"); 
  script.id = "run-res";
  script.appendChild(document.createTextNode(Flatted.stringify(res)));
  document.body.appendChild(script);
  console.log('-----' ,res);
//   localStorage.setItem('res', Flatted.stringify(res));
