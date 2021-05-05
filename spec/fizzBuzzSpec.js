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
  describe('fizz', function() {
    it('returns fizz when divisible by 3', function() {
      expect(fizzbuzz.play(6)).toEqual('Fizz');
    });
  });
  describe('buzz', function() {
    it('returns buzz when divisible by 5', function() {
      expect(fizzbuzz.play(10)).toEqual('Buzz');
    });
  });
  describe('fizzbuzz', function() {
    it('returns fizzbuzz when divisible by 3 and 5', function() {
      expect(fizzbuzz.play(15)).toEqual('Fizzbuzz');
    });
  });
  describe('numbers not divisible by 3 or 5', function() {
    it('returns the numnber', function() {
      expect(fizzbuzz.play(7)).toEqual(7);
    });
  });
});