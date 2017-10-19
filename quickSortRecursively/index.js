function quickSortRecursive(arr){
  
  
  if(arr.length < 2){
    return arr
  }
  
  const pivot = arr[0];
   
  const left = [], right = [], arr2 = arr.slice(1);
  
  arr2.map(function(elem){
    if(elem > pivot){
      right.push(elem)
      console.log('right', elem)
    }
      if(elem <= pivot ){
      left.push(elem)
      console.log('left', elem)
    }
  })
  
  return quickSortRecursive(left).concat(pivot).concat(quickSortRecursive(right));
}

var a = quickSortRecursive([4,5,6,7,8,2,3,1])


console.log(a);

