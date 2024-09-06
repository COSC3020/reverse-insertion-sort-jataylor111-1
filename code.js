function insertionSortReverse(arr) {
    // Start at the very end of the array and "subtract" backwards through the index
    for(var i = arr.length - 1; i >= 0; i--) {
      var val = arr[i];
      var j;
      // Similar to the above it now just works in the opposite direction
      for(j = i; j < arr.length - 1 && arr[j+1] < val; j++) {
        arr[j] = arr[j+1];
      }
      arr[j] = val;
    }
    return arr;
}
