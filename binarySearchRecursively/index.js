function binarySearch(item, arr) {
  
  const mid = parseInt(arr.length / 2);
  
  if(mid == 0) return -1

  if (arr[mid] == item) return arr[mid];

  if (item > arr[mid]) return binarySearch(item, arr.slice(mid));

  if (item < arr[mid]) return binarySearch(item, arr.slice(0, mid));
  
  return -1
}


const result = binarySearch(40, [1,30,45,67,89,100])

