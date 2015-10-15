describe('Function', function() {

  beforeEach(function() {

  });

  it('returns the correct number of months', function(){
    expect(calculateTaxesForYear(.002, 14400, 42000).length).to.be.equal(12);
  });

  it('returns the correct value for the first month', function(){
    expect(calculateTaxesForYear(.002, 14400, 42000)[0]).to.be.equal(8);
  });

});
