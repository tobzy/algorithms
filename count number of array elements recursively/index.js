function countItemsInArray(arr){
  if (arr.length == 1) {
    return 1; 
  }
  
  arr.splice(0,1);
  
  return 1 + countItemsInArray(arr);
}