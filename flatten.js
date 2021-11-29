// function flatten(arr) {
// 	var result = [];
// 	for (var i = 0, len = arr.length; i < len;i++) {
// 		if (Array.isArray(arr[i])) {
// 			result = result.concat(flatten(arr[i]))
// 		} else {
// 			result.push(arr[i])
// 		}
// 	}

// 	return result;
// };
// //flatten([1, 2, [3, 4], 5, [6]])


// const flatten = function(array) {
//   return array.flat();
// };
const flatten = function(array) {
	let results = [];
	for (const ele of array) {
	 
	  if (!Array.isArray(ele)) {
		results.push(ele)
		;
	  } else  {
		for (const secEle of ele) {
		  results.push(secEle)
		  ;
		}
	  }
	}
	return results;
  };
  flatten([1, [4, 5], 2, [6, 7], 3]);
  module.exports = flatten;
  