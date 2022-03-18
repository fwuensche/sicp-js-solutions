const square = (n) => n * n;

const largestNumbers = (arr, n) => arr.sort().reverse().slice(0, n);

const solution = (a, b, c) =>
  largestNumbers([a, b, c], 2)
    .map(square)
    .reduce((a, b) => a + b);

describe("solution", () => {
  it("returns the sum of the squares of the two largest numbers", () => {
    expect(solution(1, 2, 3)).toBe(13);
    expect(solution(2, 2, 3)).toBe(13);
    expect(solution(2, 2, 4)).toBe(20);
    expect(solution(10, 1, 1)).toBe(101);
  });
});
