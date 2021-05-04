describe('FizzBuzz', function() {
  let fizzbuzz;

  beforeEach(() => {
    fizzbuzz = new fizzBuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by three', function(){
      expect(fizzbuzz._isDivisibleBy(3, 3)).toBe(true);
    });
  });
  describe('knows when a number is NOT', function() {
    it('divisible by three', function(){
      expect(fizzbuzz._isDivisibleBy(1, 3)).toBe(false);
    });
  });
});