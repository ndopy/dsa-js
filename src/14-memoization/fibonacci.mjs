function fibonacci_recursive(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return fibonacci_recursive(n - 2) + fibonacci_recursive(n - 1);
}

let start = new Date();
console.log(fibonacci_recursive(40));
let end = new Date();
console.log(`fibonacci_recursive 실행 시간 : ${end - start}`);

function fibonacci_memoization(n, memo = {}) {
  if (n === 0 || n === 1) {
    return n;
  }

  if (memo[n] === undefined) {
    memo[n] =
      fibonacci_memoization(n - 2, memo) + fibonacci_memoization(n - 1, memo);
  }

  return memo[n];
}

start = new Date();
console.log(fibonacci_memoization(40));
end = new Date();
console.log(`fibonacci_memoization 실행 시간 : ${end - start}`);
