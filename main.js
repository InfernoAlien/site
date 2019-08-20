function merge(nums1, m, nums2, n) {
	let j = 0;
	
	function compareNumeric(a, b) {
		if (a > b) return 1;
		if (a == b) return 0;
		if (a < b) return -1;
	}
	
	for(let i = m; i < nums1.length; i++) {
		nums1[i] = nums2[j];
		j++;
		console.log(nums1[i]);
	}
	nums1.sort(compareNumeric);
}



let nums1 = [46,55,88,0,0,0,0];
let nums2 = [18,29,80,90];
let m = 3;
let n = 4;

console.log(nums1);
merge(nums1, m, nums2, n);
console.log(nums1);