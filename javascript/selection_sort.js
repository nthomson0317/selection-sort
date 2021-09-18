function selectionSort(arr) {
arr.sort(function(a,b){
  if (a > b) return 1
  if(a < b) return -1
  return 0
})
return arr
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");


  console.log("Expecting: [-900, 2, 4, 17, 36, 7895]");
  console.log("=>", selectionSort([17, -900, 555, 2, 36, 7895, 4]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
