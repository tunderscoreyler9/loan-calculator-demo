describe('calculate monthly rates', function () {

  it('should calculate the monthly rate correctly', function () {
    let values = {
      amount: 25502,
      years: 5,
      rate: 4.99
    };

    expect(calculateMonthlyPayment(values)).toEqual('481.14');

  });

});

describe('tests for the toFixed(2) method', function () {

  it("should return a result with 2 decimal places", function () {
    let values = {
      amount: 45000,
      years: 15,
      rate: 6.99
    };
    expect(calculateMonthlyPayment(values)).toEqual('404.22');
  });
});

/// etc
