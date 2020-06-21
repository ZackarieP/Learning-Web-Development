printReverse([1, 2, 3, 4]); //4, 3, 2, 1

function printReverse(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        console.log(nums[i]);
    }
}


isUniform([1, 1, 1, 1]); // true
isUniform([2, 1, 1, 1]); // false
isUniform(["a", "b", "p"]); // false
isUniform(["b", "b", "b"]); // true

function isUniform(arr) {
    let first = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}


function sumArray(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}


max([1, 2, 3, 4]); // return 4
max([1, 6, 3, 4]); // return 6

function max(nums) {
    let maxNum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (maxNum < nums[i]) {
            maxNum = nums[i];
        }
    }
    return maxNum;
}