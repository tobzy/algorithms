function addArray(arr){
  
	if (arr.length == 1) {
    
		return arr[0]
  
	}
  
	arr.splice(0,1);
  
	return (arr[0] + addArray(arr))

}