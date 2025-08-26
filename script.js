const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	function sumArr(arr){
		let sum = 0;
		for(let num of arr){
			sum += num;
		}
		return sum;
	}
	const result = []
	for(let i=0; i<arr.length; i++){
		for(let j=i; j<n; j++){
			const subArr = [];
			for(let k=i; k<=j; k++){
				subArr.push(arr[j])
			}
			if(sumArr(subArr) <= n){
				result.push(subArr)
			}
		}
	}
	return result;
};


const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
