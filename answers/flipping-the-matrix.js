function flippingMatrix(matrix) {
  // Write your code here
  const halfLength = matrix.length / 2;
  let total = 0;
  for (let i = 0; i < halfLength; i++) {
    for (let j = 0; j < halfLength; j++) {
      total += Math.max(
        matrix[i][j],
        matrix[matrix.length - (i + 1)][j],
        matrix[i][matrix.length - (j + 1)],
        matrix[matrix.length - (i + 1)][matrix.length - (j + 1)]
      );
    }
  }
  return total;
}
