/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function findMedian(arr) {
  // Write your code here
  const midIndex = Math.floor(arr.length / 2);
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[midIndex];
}
