/**
 * 피보나치 수열을 타뷸레이션(Tabulation, Bottom-up) 방식으로 계산한다.
 * @param {number} n
 * @returns {number}
 */
function fibonacci_tabulation(n) {
  if (n <= 1) {
    return n;
  }

  const table = [0, 1];
  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 2] + table[i - 1];
  }

  return table[n];
}

console.log(fibonacci_tabulation(40));
