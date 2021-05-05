class fizzBuzz {
  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }

  play(number) {
    if(this._isDivisibleBy(number, 3)) {
      return 'Fizz';
    } else if(this._isDivisibleBy(number, 5)) {
      return 'Buzz';
    }
  }
}