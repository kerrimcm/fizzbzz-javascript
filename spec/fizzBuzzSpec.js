describe('FizzBuzz', function() {
  let fizzbuzz;

  describe('knows when a number is', function() {
    it('divisible by three', function(){
      fizzbuzz = new fizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
});