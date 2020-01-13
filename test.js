

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
  .on(EVENT_TEST_END, function(test) {
      res.file = test.file;
  })
  .on(EVENT_TEST_PASS, function(test) {
      res.passed.push(getTestData(test));
  })
  .on(EVENT_TEST_PENDING, function(test) {
      res.pending.push(getTestData(test));
  })
  .on(EVENT_TEST_FAIL, function(test, err) {
      res.failed.push(getTestData(test, err));
  })
  .on(EVENT_RUN_END, function() {
      if(res.failed.length > 0)
          res.success = false;    
      
      script= document.createElement("div"); 
      script.id = "run-res";
      script.appendChild(document.createTextNode(Flatted.stringify(res)));
      document.body.appendChild(script);
      
      return resolve(res);
  });
