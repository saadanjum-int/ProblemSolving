// 3477. Fruits Into Baskets II
// Given two arrays fruits and baskets, each of length n, where fruits[i] represents
// the quantity of the ith fruit and baskets[j] represents the capacity of the jth basket.
// You need to place fruits into baskets following these rules: each fruit type must go
// into a basket with sufficient capacity, fruits are placed from left to right, and each
// basket can only hold one fruit type. Return the number of fruits that cannot be placed
// in any basket.

var numOfUnplacedFruits = function (fruits, baskets) {

    for (let i = 0; i < fruits.length;) {
        let initialLength = fruits.length;
        for (let j = 0; j < baskets.length;) {
            if (baskets[j] >= fruits[i]) {
                fruits.splice(i, 1);
                baskets.splice(j, 1);
                break;
            }
            j++;
        }
        if (fruits.length === initialLength) {
            i++;
        }
    }

    return fruits.length;
};


// 414. Third Maximum Number
// Given an integer array nums, return the third distinct maximum number in this array.
// If the third maximum does not exist, return the maximum number.

var thirdMax = function (nums, target) {


    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }


    let arr2 = nums.filter(n => n !== max);
    if (arr2.length === 0) return max;


    let secondMax = arr2[0];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > secondMax) {
            secondMax = arr2[i];
        }
    }


    let arr3 = arr2.filter(n => n !== secondMax);
    if (arr3.length === 0) return max;


    let thirdMax = arr3[0];
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] > thirdMax) {
            thirdMax = arr3[i];
        }
    }

    return thirdMax;
};


// 35. Search Insert Position
// Given a sorted array of distinct integers nums and a target value, return the index
// if the target is found. If not, return the index where it would be inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function (nums, target) {
    // First pass: exact match
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }

    // Second pass: find insert position
    let j = 0;
    for (; j < nums.length;) {
        if (nums[j] < target) {
            j = j + 1;
        } else {
            return j;
        }
    }

    return nums.length;
};


// 34. Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order, find the starting
// and ending position of a given target value. If target is not found in the array,
// return [-1, -1]. You must write an algorithm with O(log n) runtime complexity.

var searchRange = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == target) {

            var firstcounter = i;
            let j = i + 1;

            while (nums[j] == nums[i]) {
                j = j + 1;
            }

            var secondcounter = j - 1;

            return [firstcounter, secondcounter];
        }
    }

    return [-1, -1];
};


// 1. Two Sum
// Given an array of integers nums and an integer target, return the indices of the two
// numbers such that they add up to target. You may assume that each input would have
// exactly one solution, and you may not use the same element twice.

var num = [2, 7, 11, 15];

function twosum(target) {
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === target) {
                console.log(num[i], num[j]);
                return true;
            }
        }
    }
    return false;
}

twosum(9);


// 2678. Number of Senior Citizens
// You are given a 0-indexed array of strings details. Each element of details provides
// information about a given passenger compressed into a string of length 15. The system
// is 1-indexed, so the first character is at index 1. The age of the passenger is
// inferred from characters at indices 12 and 13. Return the number of passengers who
// are strictly more than 60 years old.

var countSeniors = function (details) {
    let count = 0;
    for (let i = 0; i < details.length;) {
        let passenger = details[i];
        let age = parseInt(passenger[11] + passenger[12]);
        if (age > 60) {
            count++;
        }
        i++;
    }
    return count;
};


// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining
// the relative order of the non-zero elements. Note that you must do this in-place
// without making a copy of the array.

var moveZeroes = function (nums) {
    for (let i = 0; i < nums.length;) {
        if (nums[i] === 0) {
            nums.splice(i, 1);  // remove zero from current position
            nums.push(0);        // add it to the end
        } else {
            i++;
        }
    }
};


// 392. Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by
// deleting some (can be none) of the characters without disturbing the relative positions
// of the remaining characters.

var isSubsequence = function (s, t) {
    let i = 0;
    for (let j = 0; j < t.length;) {
        for (; i < s.length;) {
            if (s[i] === t[j]) {
                i++;
                break;
            }
            break;
        }
        j++;
    }
    return i === s.length;
};