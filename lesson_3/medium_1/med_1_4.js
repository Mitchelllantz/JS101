function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
let arr = [1, 23, 5634, 347, 2452, 254, 252, 2346, 1243, 6236, 2467, 235];
let arr2 = [1, 23, 5634, 347, 2452, 254, 252, 2346, 1243, 6236, 2467, 235];

console.log(addToRollingBuffer1(arr, 12, 2));
console.log(addToRollingBuffer2(arr2, 12, 2));

console.log(arr);
console.log(arr2);

