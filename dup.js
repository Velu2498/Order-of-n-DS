//to find number of duplicates in an array with (order of n2)=>O(n2)
arr = [1, 1, 2, 3, 1, 2, 3, 4, 5];
obj = {};
for (el = 0; el < arr.length; el++) {
  var count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == arr[el]) {
      count++;
      obj[arr[el]] = count;
    }
  }
}
console.log(obj);

//to find number of duplicates in an array with (order of n)=>O(n)
arr = [1, 1, 2, 3, 1, 2, 3, 4, 5, 8];
var ans = arr.reduce(function(prev, cur) {
  // console.log(prev[cur]) //undefined
  // console.log((undefined || 0)) // 0
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});
console.log(ans);
