function calculateGCD(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

const prime1 = 1071; // Replace with your prime number
const prime2 = 1029; // Replace with your prime number

try {
  const gcd = calculateGCD(prime1, prime2);
  console.log(`GCD of ${prime1} and ${prime2} is ${gcd}`);
} catch (error) {
  console.error(error.message);
}
