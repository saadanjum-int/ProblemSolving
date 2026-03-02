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

/**
 * ---------------2 March---------------------------------
 * LeetCode #315 - Count of Smaller Numbers After Self (Hard)
 *
 * PROBLEM:
 * Given an integer array nums, return an array counts where counts[i]
 * is the number of smaller elements to the right of nums[i].
 *
 * APPROACH:
 * We create an empty result array outside the loops.
 * The outer loop fixes the current element at index i.
 * The inner loop always starts from i+1 so it only looks at elements
 * to the right of i. For every element at j that is smaller than
 * nums[i] we increment a counter. Once the inner loop finishes
 * we push that counter into our result array and move i forward.
 * We avoided using .map() and instead manually pushed to keep
 * full control over the logic.
 */
function countSmaller(nums) {
    let counts = [];

    for (let i = 0; i < nums.length; i++) {
        let counter = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                counter++;
            }
        }
        counts.push(counter);
    }

    return counts;
}


// ─────────────────────────────────────────────────────────────────


/**
 * LeetCode #520 - Detect Capital Use (Easy)
 *
 * PROBLEM:
 * Given a string word, return true if capitalization is used correctly.
 * Valid cases: all caps, all lowercase, or only first letter capitalized.
 *
 * APPROACH:
 * We split into two branches based on the first letter.
 * If the first letter is uppercase we have two valid sub-cases —
 * either every single letter in the word is uppercase, or every
 * letter after the first is lowercase. We check both using .every()
 * and if either passes we return true.
 * If the first letter is lowercase there is only one valid case —
 * every remaining letter must also be lowercase. If .every() passes
 * we return true, otherwise we fall through to return false.
 */
function detectCapitalUse(word) {
    if (word[0] === word[0].toUpperCase()) {
        if (word.split('').every(c => c === c.toUpperCase()) ||
            word.slice(1).split('').every(c => c === c.toLowerCase())) {
            return true;
        }
    } else {
        if (word.slice(1).split('').every(c => c === c.toLowerCase())) {
            return true;
        }
    }
    return false;
}


// ─────────────────────────────────────────────────────────────────


/**
 * LeetCode #278 - First Bad Version (Easy)
 *
 * PROBLEM:
 * Given n versions where every version after the first bad one is also
 * bad, find the first bad version while minimizing API calls.
 *
 * APPROACH:
 * We use iterative binary search with left starting at 1 and right at n.
 * Each iteration we calculate mid and call isBadVersion on it.
 * If mid is bad we set right = mid and not mid-1 because mid itself
 * could be the first bad version and we must not exclude it.
 * If mid is good the first bad must be strictly after mid so we
 * set left = mid+1. We keep halving the range until left and right
 * meet — that position is our first bad version.
 */
function solution(isBadVersion) {
    return function (n) {
        let left = 1;
        let right = n;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
}


// ─────────────────────────────────────────────────────────────────


/**
 * LeetCode #274 - H-Index (Medium)
 *
 * PROBLEM:
 * Given a citations array, return the maximum h such that h papers
 * each have been cited at least h times.
 *
 * APPROACH:
 * We sort the array in descending order so the most cited papers
 * come first. We keep a position counter starting at 0 outside the loop.
 * The loop goes through each citation and checks if the citation value
 * is greater than or equal to the current position. If yes we increment
 * position — this means one more paper qualifies. If the citation drops
 * below position we break immediately because all remaining citations
 * will be even smaller due to the sort. The final value of position
 * is our h-index because it represents how many papers have at least
 * that many citations.
 */
function hIndex(citations) {
    citations.sort((a, b) => b - a);

    let position = 0;

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= position) {
            position++;
        } else {
            break;
        }
    }

    return position;
}


// ─────────────────────────────────────────────────────────────────


/**
 * LeetCode #263 - Ugly Number (Easy)
 *
 * PROBLEM:
 * Return true if n is an ugly number — a positive integer whose only
 * prime factors are 2, 3, and 5.
 *
 * APPROACH:
 * We first handle the edge case of n <= 0 which can never be ugly.
 * Then we divide n by 2 repeatedly until it is no longer divisible,
 * then do the same for 3, then for 5. After all three while loops
 * if n has been reduced to exactly 1 it means all prime factors were
 * 2, 3, or 5 and nothing else — so it is ugly. If n is anything other
 * than 1 it means another prime factor exists and we return false.
 */
function isUgly(n) {
    if (n <= 0) return false;

    while (n % 2 === 0) n = n / 2;
    while (n % 3 === 0) n = n / 3;
    while (n % 5 === 0) n = n / 5;

    return n === 1;
}


// ─────────────────────────────────────────────────────────────────


/**
 * LeetCode #70 - Climbing Stairs (Easy)
 *
 * PROBLEM:
 * You can climb 1 or 2 steps at a time. Given n steps, return the
 * number of distinct ways to reach the top.
 *
 * APPROACH:
 * NOTE: The original approach of dividing by 2 does not account for
 * all distinct combinations of 1 and 2 steps. The correct approach
 * is dynamic programming — the number of ways to reach step n equals
 * the number of ways to reach step n-1 (then take 1 step) plus the
 * number of ways to reach step n-2 (then take 2 steps). This follows
 * the Fibonacci pattern. We start with base cases: 1 way to reach
 * step 1, and 2 ways to reach step 2. Then we build up from there.
 */
var climbStairs = function (n) {
    if (n === 1) return 1;
    let prev2 = 1;
    let prev1 = 2;
    for (let i = 3; i <= n; i++) {
        let curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
};


// ─────────────────────────────────────────────────────────────────


/**
 * LeetCode #128 - Longest Consecutive Sequence (Medium)
 *
 * PROBLEM:
 * Given an unsorted array of integers, return the length of the
 * longest consecutive elements sequence.
 *
 * APPROACH:
 * We first sort the array in ascending order so consecutive numbers
 * end up next to each other. We use two nested loops — the outer loop
 * fixes a starting position i and the inner loop j starts at the same
 * index i. Inside the inner loop there are two if checks. The first
 * checks if nums[j] equals nums[i] which handles the starting element
 * of each sequence. The second checks if nums[j] equals nums[j-1]+1
 * which means the sequence is continuing. If neither condition is met
 * we break out of the inner loop. After breaking we compare temp with
 * maxLen and update if larger, then reset temp to zero. The outer loop
 * then moves i forward and the process repeats for the next potential
 * sequence start.
 */
function longestConsecutive(nums) {
    nums.sort((a, b) => a - b);

    let maxLen = 0;
    let temp = 0;

    for (let i = 0; i < nums.length; i++) {
        temp = 0;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                temp++;
            } else if (nums[j] === nums[j - 1] + 1) {
                temp++;
            } else {
                break;
            }
        }

        if (temp > maxLen) {
            maxLen = temp;
        }
        temp = 0;
    }

    return maxLen;
}