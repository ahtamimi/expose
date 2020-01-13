

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

  let res = {passed: [], failed: [], pending: [], success: true};
  mocha.reporter('min');
  mocha.run()
  .on('test end', function(test) {
      res.file = test.file;
  })
  .on('pass', function(test) {
      res.passed.push(getTestData(test));
      console.log(mocha);
  })
  .on('pending', function(test) {
      res.pending.push(getTestData(test));
      console.log(mocha);
  })
  .on('fail', function(test, err) {
      res.failed.push(getTestData(test, err));
      console.log(mocha);
  })
  .on('end', function() {
      if(res.failed.length > 0)
          res.success = false;    
      
      script= document.createElement("div"); 
      script.id = "run-res";
      script.appendChild(document.createTextNode(JSON.stringify(res)));
      document.body.appendChild(script);
  });
