let number = 100;

for (let i = 1; i <= number; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBazz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Bazz");
  } else {
    console.log(i);
  }
}
