const problemsData = [
    { id: 2235, title: 'Add Two Integers', acceptance: 92.7, difficulty: 'Easy'},
    { id: 1929, title: 'Concatenation of Array', acceptance: 91.6, difficulty: 'Easy'},
    { id: 1920, title: 'Build Array from Permutation', acceptance: 91.5, difficulty: 'Easy'},
    { id: 1108, title: 'Defanging an IP Address', acceptance: 89.1, difficulty: 'Easy'},
    { id: 1365, title: 'How Many Numbers Are Smaller Than the Current Number', acceptance: 86.4, difficulty: 'Easy'},
    { id: 1313, title: 'Decompress Run-Length Encoded List', acceptance: 85.9, difficulty: 'Easy'},
    { id: 1528, title: 'Shuffle String', acceptance: 85.7, difficulty: 'Easy'},
    { id: 2103, title: 'Rings and Rods', acceptance: 81.6, difficulty: 'Easy'},
    { id: 832, title: 'Flipping an Image', acceptance: 79.9, difficulty: 'Easy'},
    { id: 2089, title: 'Find Target Indices After Sorting Array', acceptance: 78.2, difficulty: 'Easy'},
    { id: 589, title: 'N-ary Tree Preorder Traversal', acceptance: 76.3, difficulty: 'Easy'},
    { id: 595, title: 'Big Countries', acceptance: 75.5, difficulty: 'Easy'},
    { id: 338, title: 'Counting Bits', acceptance: 74.5, difficulty: 'Easy'},
    { id: 586, title: 'Customer Placing the Largest Number of Orders', acceptance: 73.8, difficulty: 'Easy'},
    { id: 876, title: 'Middle of the Linked List', acceptance: 72.9, difficulty: 'Easy'},
    { id: 104, title: 'Maximum Depth of Binary Tree', acceptance: 72.2, difficulty: 'Easy'},
    { id: 226, title: 'Invert Binary Tree', acceptance: 72.0, difficulty: 'Easy'},
    { id: 1207, title: 'Unique Number of Occurrences', acceptance: 71.9, difficulty: 'Easy'},
    { id: 977, title: 'Squares of a Sorted Array', acceptance: 71.7, difficulty: 'Easy'},
    { id: 1047, title: 'Remove All Adjacent Duplicates In String', acceptance: 70.9, difficulty: 'Easy'},
    { id: 206, title: 'Reverse Linked List', acceptance: 70.8, difficulty: 'Easy'},
    { id: 1200, title: 'Minimum Absolute Difference', acceptance: 69.9, difficulty: 'Easy'},
    { id: 136, title: 'Single Number', acceptance: 69.6, difficulty: 'Easy'},
    { id: 349, title: 'Intersection of Two Arrays', acceptance: 69.4, difficulty: 'Easy'},
    { id: 463, title: 'Island Perimeter', acceptance: 69.1, difficulty: 'Easy'},
    { id: 509, title: 'Fibonacci Number', acceptance: 68.3, difficulty: 'Easy'},
    { id: 1122, title: 'Relative Sort Array', acceptance: 68.2, difficulty: 'Easy'},
    { id: 1160, title: 'Find Words That Can Be Formed by Characters', acceptance: 67.7, difficulty: 'Easy'},
    { id: 118, title: "Pascal's Triangle", acceptance: 65.5, difficulty: 'Easy'},
    { id: 706, title: 'Design HashMap', acceptance: 65.2, difficulty: 'Easy'},
    { id: 2224, title: 'Minimum Number of Operations to Convert Time', acceptance: 63.4, difficulty: 'Easy'},
    { id: 169, title: 'Majority Element', acceptance: 63.2, difficulty: 'Easy'},
    { id: 144, title: 'Binary Tree Preorder Traversal', acceptance: 63.0, difficulty: 'Easy'},
    { id: 191, title: 'Number of 1 Bits', acceptance: 62.4, difficulty: 'Easy'},
    { id: 242, title: 'Valid Anagram', acceptance: 61.7, difficulty: 'Easy'},
    { id: 217, title: 'Contains Duplicate', acceptance: 61.0, difficulty: 'Easy'},
    { id: 171, title: 'Excel Sheet Column Number', acceptance: 60.8, difficulty: 'Easy'},
    { id: 283, title: 'Move Zeroes', acceptance: 60.8, difficulty: 'Easy'},
    { id: 21, title: 'Merge Two Sorted Lists', acceptance: 60.7, difficulty: 'Easy'},
    { id: 389, title: 'Find the Difference', acceptance: 60.5, difficulty: 'Easy'},
    { id: 257, title: 'Binary Tree Paths', acceptance: 59.1, difficulty: 'Easy'},
    { id: 1854, title: 'Maximum Population Year', acceptance: 59.0, difficulty: 'Easy'},
    { id: 1331, title: 'Rank Transform of an Array', acceptance: 58.6, difficulty: 'Easy'},
    { id: 733, title: 'Flood Fill', acceptance: 58.5, difficulty: 'Easy'},
    { id: 13, title: 'Roman to Integer', acceptance: 57.9, difficulty: 'Easy'},
    { id: 235, title: 'Lowest Common Ancestor of a Binary Search Tree', acceptance: 57.5, difficulty: 'Easy'},
    { id: 530, title: 'Minimum Absolute Difference in BST', acceptance: 56.3, difficulty: 'Easy'},
    { id: 383, title: 'Ransom Note', acceptance: 56.1, difficulty: 'Easy'},
    { id: 100, title: 'Same Tree', acceptance: 55.7, difficulty: 'Easy'},
    { id: 1539, title: 'Kth Missing Positive Number', acceptance: 55.6, difficulty: 'Easy'},
    { id: 485, title: 'Max Consecutive Ones', acceptance: 55.3, difficulty: 'Easy'},
    { id: 704, title: 'Binary Search', acceptance: 55.2, difficulty: 'Easy'},
    { id: 703, title: 'Kth Largest Element in a Stream', acceptance: 55.0, difficulty: 'Easy'},
    { id: 543, title: 'Diameter of Binary Tree', acceptance: 54.7, difficulty: 'Easy'},
    { id: 1275, title: 'Find Winner on a Tic Tac Toe Game', acceptance: 54.6, difficulty: 'Easy'},
    { id: 121, title: 'Best Time to Buy and Sell Stock', acceptance: 54.2, difficulty: 'Easy'},
    { id: 202, title: 'Happy Number', acceptance: 53.5, difficulty: 'Easy'},
    { id: 9, title: 'Palindrome Number', acceptance: 52.5, difficulty: 'Easy'},
    { id: 415, title: 'Add Strings', acceptance: 52.3, difficulty: 'Easy'},
    { id: 101, title: 'Symmetric Tree', acceptance: 51.9, difficulty: 'Easy'},
    { id: 724, title: 'Find Pivot Index', acceptance: 51.9, difficulty: 'Easy'},
    { id: 27, title: 'Remove Element', acceptance: 51.4, difficulty: 'Easy'},
    { id: 70, title: 'Climbing Stairs', acceptance: 51.2, difficulty: 'Easy'},
    { id: 392, title: 'Is Subsequence', acceptance: 51.0, difficulty: 'Easy'},
    { id: 53, title: 'Maximum Subarray', acceptance: 49.6, difficulty: 'Easy'},
    { id: 26, title: 'Remove Duplicates from Sorted Array', acceptance: 49.3, difficulty: 'Easy'},
    { id: 1, title: 'Two Sum', acceptance: 48.7, difficulty: 'Easy'},
    { id: 844, title: 'Backspace String Compare', acceptance: 48.0, difficulty: 'Easy'},
    { id: 551, title: 'Student Attendance Record I', acceptance: 47.7, difficulty: 'Easy'},
    { id: 501, title: 'Find Mode in Binary Search Tree', acceptance: 47.6, difficulty: 'Easy'},
    { id: 110, title: 'Balanced Binary Tree', acceptance: 47.1, difficulty: 'Easy'},
    { id: 234, title: 'Palindrome Linked List', acceptance: 47.1, difficulty: 'Easy'},
    { id: 141, title: 'Linked List Cycle', acceptance: 46.1, difficulty: 'Easy'},
    { id: 405, title: 'Convert a Number to Hexadecimal', acceptance: 45.8, difficulty: 'Easy'},
    { id: 572, title: 'Subtree of Another Tree', acceptance: 45.5, difficulty: 'Easy'},
    { id: 231, title: 'Power of Two', acceptance: 45.1, difficulty: 'Easy'},
    { id: 1592, title: 'Rearrange Spaces Between Words', acceptance: 43.9, difficulty: 'Easy'},
    { id: 459, title: 'Repeated Substring Pattern', acceptance: 43.6, difficulty: 'Easy'},
    { id: 367, title: 'Valid Perfect Square', acceptance: 43.1, difficulty: 'Easy'},
    { id: 66, title: 'Plus One', acceptance: 43.0, difficulty: 'Easy'},
    { id: 35, title: 'Search Insert Position', acceptance: 42.3, difficulty: 'Easy'},
    { id: 205, title: 'Isomorphic Strings', acceptance: 42.2, difficulty: 'Easy'},
    { id: 278, title: 'First Bad Version', acceptance: 42.0, difficulty: 'Easy'},
    { id: 20, title: 'Valid Parentheses', acceptance: 40.9, difficulty: 'Easy'},
    { id: 14, title: 'Longest Common Prefix', acceptance: 39.7, difficulty: 'Easy'},
    { id: 69, title: 'Sqrt(x)', acceptance: 36.6, difficulty: 'Easy'},
    { id: 28, title: 'Implement strStr()', acceptance: 36.3, difficulty: 'Easy'},
    { id: 914, title: 'X of a Kind in a Deck of Cards', acceptance: 32.8, difficulty: 'Easy'},
    { id: 1302, title: 'Deepest Leaves Sum', acceptance: 87.1, difficulty: 'Medium'},
    { id: 807, title: 'Max Increase to Keep City Skyline', acceptance: 85.6, difficulty: 'Medium'},
    { id: 763, title: 'Partition Labels', acceptance: 79.6, difficulty: 'Medium'},
    { id: 894, title: 'All Possible Full Binary Trees', acceptance: 79.6, difficulty: 'Medium'},
    { id: 1305, title: 'All Elements in Two Binary Search Trees', acceptance: 79.6, difficulty: 'Medium'},
    { id: 1277, title: 'Count Square Submatrices with All Ones', acceptance: 74.3, difficulty: 'Medium'},
    { id: 419, title: 'Battleships in a Board', acceptance: 73.9, difficulty: 'Medium'},
    { id: 1026, title: 'Maximum Difference Between Node and Ancestor', acceptance: 73.3, difficulty: 'Medium'},
    { id: 46, title: 'Permutations', acceptance: 72.9, difficulty: 'Medium'},
    { id: 78, title: 'Subsets', acceptance: 72.0, difficulty: 'Medium'},
    { id: 22, title: 'Generate Parentheses', acceptance: 70.5, difficulty: 'Medium'},
    { id: 695, title: 'Max Area of Island', acceptance: 70.1, difficulty: 'Medium'},
    { id: 1525, title: 'Number of Good Ways to Split a String', acceptance: 69.9, difficulty: 'Medium'},
    { id: 841, title: 'Keys and Rooms', acceptance: 69.3, difficulty: 'Medium'},
    { id: 1110, title: 'Delete Nodes And Return Forest', acceptance: 69.3, difficulty: 'Medium'},
    { id: 173, title: 'Binary Search Tree Iterator', acceptance: 67.7, difficulty: 'Medium'},
    { id: 931, title: 'Minimum Falling Path Sum', acceptance: 67.7, difficulty: 'Medium'},
    { id: 1167, title: 'Minimum Cost to Connect Sticks', acceptance: 67.4, difficulty: 'Medium'},
    { id: 48, title: 'Rotate Image', acceptance: 67.3, difficulty: 'Medium'},
    { id: 951, title: 'Flip Equivalent Binary Trees', acceptance: 66.7, difficulty: 'Medium'},
    { id: 1706, title: 'Where Will the Ball Fall', acceptance: 66.7, difficulty: 'Medium'},
    { id: 216, title: 'Combination Sum III', acceptance: 66.2, difficulty: 'Medium'},
    { id: 39, title: 'Combination Sum', acceptance: 66.1, difficulty: 'Medium'},
    { id: 973, title: 'K Closest Points to Origin', acceptance: 65.9, difficulty: 'Medium'},
    { id: 647, title: 'Palindromic Substrings', acceptance: 65.7, difficulty: 'Medium'},
    { id: 1249, title: 'Minimum Remove to Make Valid Parentheses', acceptance: 65.7, difficulty: 'Medium'},
    { id: 289, title: 'Game of Life', acceptance: 65.6, difficulty: 'Medium'},
    { id: 427, title: 'Construct Quad Tree', acceptance: 65.6, difficulty: 'Medium'},
    { id: 1268, title: 'Search Suggestions System', acceptance: 65.3, difficulty: 'Medium'},
    { id: 347, title: 'Top K Frequent Elements', acceptance: 65.0, difficulty: 'Medium'},
    { id: 49, title: 'Group Anagrams', acceptance: 64.6, difficulty: 'Medium'},
    { id: 77, title: 'Combinations', acceptance: 64.5, difficulty: 'Medium'},
    { id: 690, title: 'Employee Importance', acceptance: 64.4, difficulty: 'Medium'},
    { id: 1101, title: 'The Earliest Moment When Everyone Become Friends', acceptance: 64.4, difficulty: 'Medium'},
    { id: 238, title: 'Product of Array Except Self', acceptance: 64.2, difficulty: 'Medium'},
    { id: 215, title: 'Kth Largest Element in an Array', acceptance: 63.9, difficulty: 'Medium'},
    { id: 398, title: 'Random Pick Index', acceptance: 63.4, difficulty: 'Medium'},
    { id: 1004, title: 'Max Consecutive Ones III', acceptance: 63.1, difficulty: 'Medium'},
    { id: 122, title: 'Best Time to Buy and Sell Stock II', acceptance: 62.3, difficulty: 'Medium'},
    { id: 241, title: 'Different Ways to Add Parentheses', acceptance: 62.1, difficulty: 'Medium'},
    { id: 102, title: 'Binary Tree Level Order Traversal', acceptance: 61.3, difficulty: 'Medium'},
    { id: 636, title: 'Exclusive Time of Functions', acceptance: 60.5, difficulty: 'Medium'},
    { id: 62, title: 'Unique Paths', acceptance: 60.4, difficulty: 'Medium'},
    { id: 131, title: 'Palindrome Partitioning', acceptance: 60.2, difficulty: 'Medium'},
    { id: 378, title: 'Kth Smallest Element in a Sorted Matrix', acceptance: 59.9, difficulty: 'Medium'},
    { id: 12, title: 'Integer to Roman', acceptance: 59.7, difficulty: 'Medium'},
    { id: 64, title: 'Minimum Path Sum', acceptance: 59.7, difficulty: 'Medium'},
    { id: 167, title: 'Two Sum II - Input Array Is Sorted', acceptance: 59.6, difficulty: 'Medium'},
    { id: 1048, title: 'Longest String Chain', acceptance: 59.4, difficulty: 'Medium'},
    { id: 430, title: 'Flatten a Multilevel Doubly Linked List', acceptance: 59.0, difficulty: 'Medium'},
    { id: 1014, title: 'Best Sightseeing Pair', acceptance: 59.0, difficulty: 'Medium'},
    { id: 1143, title: 'Longest Common Subsequence', acceptance: 59.0, difficulty: 'Medium'},
    { id: 900, title: 'RLE Iterator', acceptance: 58.9, difficulty: 'Medium'},
    { id: 208, title: 'Implement Trie (Prefix Tree)', acceptance: 58.8, difficulty: 'Medium'},
    { id: 399, title: 'Evaluate Division', acceptance: 58.8, difficulty: 'Medium'},
    { id: 540, title: 'Single Element in a Sorted Array', acceptance: 58.6, difficulty: 'Medium'},
    { id: 1504, title: 'Count Submatrices With All Ones', acceptance: 58.4, difficulty: 'Medium'},
    { id: 105, title: 'Construct Binary Tree from Preorder and Inorder Traversal', acceptance: 58.2, difficulty: 'Medium'},
    { id: 1376, title: 'Time Needed to Inform All Employees', acceptance: 58.2, difficulty: 'Medium'},
    { id: 1094, title: 'Car Pooling', acceptance: 57.9, difficulty: 'Medium'},
    { id: 2178, title: 'Maximum Split of Positive Even Integers', acceptance: 57.6, difficulty: 'Medium'},
    { id: 740, title: 'Delete and Earn', acceptance: 57.5, difficulty: 'Medium'},
    { id: 384, title: 'Shuffle an Array', acceptance: 57.2, difficulty: 'Medium'},
    { id: 498, title: 'Diagonal Traverse', acceptance: 57.2, difficulty: 'Medium'},
    { id: 394, title: 'Decode String', acceptance: 56.5, difficulty: 'Medium'},
    { id: 1296, title: 'Divide Array in Sets of K Consecutive Numbers', acceptance: 56.5, difficulty: 'Medium'},
    { id: 947, title: 'Most Stones Removed with Same Row or Column', acceptance: 56.4, difficulty: 'Medium'},
    { id: 846, title: 'Hand of Straights', acceptance: 56.3, difficulty: 'Medium'},
    { id: 652, title: 'Find Duplicate Subtrees', acceptance: 56.1, difficulty: 'Medium'},
    { id: 109, title: 'Convert Sorted List to Binary Search Tree', acceptance: 56.0, difficulty: 'Medium'},
    { id: 721, title: 'Accounts Merge', acceptance: 56.0, difficulty: 'Medium'},
    { id: 222, title: 'Count Complete Tree Nodes', acceptance: 55.8, difficulty: 'Medium'},
    { id: 236, title: 'Lowest Common Ancestor of a Binary Tree', acceptance: 55.8, difficulty: 'Medium'},
    { id: 539, title: 'Minimum Time Difference', acceptance: 55.6, difficulty: 'Medium'},
    { id: 752, title: 'Open the Lock', acceptance: 55.4, difficulty: 'Medium'},
    { id: 729, title: 'My Calendar I', acceptance: 55.3, difficulty: 'Medium'},
    { id: 1509, title: 'Minimum Difference Between Largest and Smallest Value in Three Moves', acceptance: 55.2, difficulty: 'Medium'},
    { id: 1631, title: 'Path With Minimum Effort', acceptance: 55.1, difficulty: 'Medium'},
    { id: 621, title: 'Task Scheduler', acceptance: 54.7, difficulty: 'Medium'},
    { id: 17, title: 'Letter Combinations of a Phone Number', acceptance: 54.5, difficulty: 'Medium'},
    { id: 692, title: 'Top K Frequent Words', acceptance: 54.5, difficulty: 'Medium'},
    { id: 113, title: 'Path Sum II', acceptance: 54.4, difficulty: 'Medium'},
    { id: 200, title: 'Number of Islands', acceptance: 54.4, difficulty: 'Medium'},
    { id: 447, title: 'Number of Boomerangs', acceptance: 54.4, difficulty: 'Medium'},
    { id: 833, title: 'Find And Replace in String', acceptance: 54.3, difficulty: 'Medium'},
    { id: 875, title: 'Koko Eating Bananas', acceptance: 54.3, difficulty: 'Medium'},
    { id: 11, title: 'Container With Most Water', acceptance: 54.0, difficulty: 'Medium'},
    { id: 337, title: 'House Robber III', acceptance: 53.6, difficulty: 'Medium'},
    { id: 939, title: 'Minimum Area Rectangle', acceptance: 53.5, difficulty: 'Medium'},
    { id: 1010, title: 'Pairs of Songs With Total Durations Divisible by 60', acceptance: 53.5, difficulty: 'Medium'},
    { id: 934, title: 'Shortest Bridge', acceptance: 53.1, difficulty: 'Medium'},
    { id: 1102, title: 'Path With Maximum Minimum Value', acceptance: 53.1, difficulty: 'Medium'},
    { id: 452, title: 'Minimum Number of Arrows to Burst Balloons', acceptance: 53.0, difficulty: 'Medium'},
    { id: 981, title: 'Time Based Key-Value Store', acceptance: 52.6, difficulty: 'Medium'},
    { id: 1007, title: 'Minimum Domino Rotations For Equal Row', acceptance: 52.6, difficulty: 'Medium'},
    { id: 767, title: 'Reorganize String', acceptance: 52.2, difficulty: 'Medium'},
    { id: 279, title: 'Perfect Squares', acceptance: 52.0, difficulty: 'Medium'},
    { id: 1218, title: 'Longest Arithmetic Subsequence of Given Difference', acceptance: 51.8, difficulty: 'Medium'},
    { id: 380, title: 'Insert Delete GetRandom O(1)', acceptance: 51.5, difficulty: 'Medium'},
    { id: 1855, title: 'Maximum Distance Between a Pair of Values', acceptance: 51.5, difficulty: 'Medium'},
    { id: 720, title: 'Longest Word in Dictionary', acceptance: 51.2, difficulty: 'Medium'},
    { id: 304, title: 'Range Sum Query 2D - Immutable', acceptance: 51.1, difficulty: 'Medium'},
    { id: 424, title: 'Longest Repeating Character Replacement', acceptance: 51.0, difficulty: 'Medium'},
    { id: 524, title: 'Longest Word in Dictionary through Deleting', acceptance: 51.0, difficulty: 'Medium'},
    { id: 792, title: 'Number of Matching Subsequences', acceptance: 50.6, difficulty: 'Medium'},
    { id: 486, title: 'Predict the Winner', acceptance: 50.4, difficulty: 'Medium'},
    { id: 743, title: 'Network Delay Time', acceptance: 50.4, difficulty: 'Medium'},
    { id: 990, title: 'Satisfiability of Equality Equations', acceptance: 50.3, difficulty: 'Medium'},
    { id: 1423, title: 'Maximum Points You Can Obtain from Cards', acceptance: 50.1, difficulty: 'Medium'},
    { id: 437, title: 'Path Sum III', acceptance: 50.0, difficulty: 'Medium'},
    { id: 417, title: 'Pacific Atlantic Water Flow', acceptance: 49.9, difficulty: 'Medium'},
    { id: 300, title: 'Longest Increasing Subsequence', acceptance: 49.8, difficulty: 'Medium'},
    { id: 562, title: 'Longest Line of Consecutive One in Matrix', acceptance: 49.4, difficulty: 'Medium'},
    { id: 930, title: 'Binary Subarrays With Sum', acceptance: 49.3, difficulty: 'Medium'},
    { id: 147, title: 'Insertion Sort List', acceptance: 49.2, difficulty: 'Medium'},
    { id: 450, title: 'Delete Node in a BST', acceptance: 49.2, difficulty: 'Medium'},
    { id: 38, title: 'Count and Say', acceptance: 49.0, difficulty: 'Medium'},
    { id: 128, title: 'Longest Consecutive Sequence', acceptance: 48.8, difficulty: 'Medium'},
    { id: 117, title: 'Populating Next Right Pointers in Each Node II', acceptance: 48.7, difficulty: 'Medium'},
    { id: 138, title: 'Copy List with Random Pointer', acceptance: 48.7, difficulty: 'Medium'},
    { id: 1673, title: 'Find the Most Competitive Subsequence', acceptance: 48.7, difficulty: 'Medium'},
    { id: 2034, title: 'Stock Price Fluctuation', acceptance: 48.7, difficulty: 'Medium'},
    { id: 853, title: 'Car Fleet', acceptance: 48.6, difficulty: 'Medium'},
    { id: 2096, title: 'Step-By-Step Directions From a Binary Tree Node to Another', acceptance: 48.6, difficulty: 'Medium'},
    { id: 133, title: 'Clone Graph', acceptance: 48.4, difficulty: 'Medium'},
    { id: 1352, title: 'Product of the Last K Numbers', acceptance: 48.4, difficulty: 'Medium'},
    { id: 2018, title: 'Check if Word Can Be Placed In Crossword', acceptance: 48.3, difficulty: 'Medium'},
    { id: 2013, title: 'Detect Squares', acceptance: 48.2, difficulty: 'Medium'},
    { id: 886, title: 'Possible Bipartition', acceptance: 47.7, difficulty: 'Medium'},
    { id: 198, title: 'House Robber', acceptance: 47.6, difficulty: 'Medium'},
    { id: 299, title: 'Bulls and Cows', acceptance: 47.5, difficulty: 'Medium'},
    { id: 849, title: 'Maximize Distance to Closest Person', acceptance: 47.5, difficulty: 'Medium'},
    { id: 1514, title: 'Path with Maximum Probability', acceptance: 47.1, difficulty: 'Medium'},
    { id: 16, title: '3Sum Closest', acceptance: 47.0, difficulty: 'Medium'},
    { id: 210, title: 'Course Schedule II', acceptance: 46.9, difficulty: 'Medium'},
    { id: 1438, title: 'Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit', acceptance: 46.9, difficulty: 'Medium'},
    { id: 809, title: 'Expressive Words', acceptance: 46.4, difficulty: 'Medium'},
    { id: 528, title: 'Random Pick with Weight', acceptance: 46.2, difficulty: 'Medium'},
    { id: 162, title: 'Find Peak Element', acceptance: 46.0, difficulty: 'Medium'},
    { id: 2115, title: 'Find All Possible Recipes from Given Supplies', acceptance: 46.0, difficulty: 'Medium'},
    { id: 659, title: 'Split Array into Consecutive Subsequences', acceptance: 45.8, difficulty: 'Medium'},
    { id: 375, title: 'Guess Number Higher or Lower II', acceptance: 45.6, difficulty: 'Medium'},
    { id: 1642, title: 'Furthest Building You Can Reach', acceptance: 45.3, difficulty: 'Medium'},
    { id: 56, title: 'Merge Intervals', acceptance: 45.2, difficulty: 'Medium'},
    { id: 187, title: 'Repeated DNA Sequences', acceptance: 45.1, difficulty: 'Medium'},
    { id: 207, title: 'Course Schedule', acceptance: 45.1, difficulty: 'Medium'},
    { id: 139, title: 'Word Break', acceptance: 44.8, difficulty: 'Medium'},
    { id: 658, title: 'Find K Closest Elements', acceptance: 44.7, difficulty: 'Medium'},
    { id: 1091, title: 'Shortest Path in Binary Matrix', acceptance: 44.4, difficulty: 'Medium'},
    { id: 560, title: 'Subarray Sum Equals K', acceptance: 44.2, difficulty: 'Medium'},
    { id: 211, title: 'Design Add and Search Words Data Structure', acceptance: 43.9, difficulty: 'Medium'},
    { id: 542, title: '01 Matrix', acceptance: 43.9, difficulty: 'Medium'},
    { id: 593, title: 'Valid Square', acceptance: 43.9, difficulty: 'Medium'},
    { id: 209, title: 'Minimum Size Subarray Sum', acceptance: 43.7, difficulty: 'Medium'},
    { id: 221, title: 'Maximal Square', acceptance: 43.7, difficulty: 'Medium'},
    { id: 92, title: 'Reverse Linked List II', acceptance: 43.6, difficulty: 'Medium'},
    { id: 150, title: 'Evaluate Reverse Polish Notation', acceptance: 43.1, difficulty: 'Medium'},
    { id: 1129, title: 'Shortest Path with Alternating Colors', acceptance: 42.4, difficulty: 'Medium'},
    { id: 54, title: 'Spiral Matrix', acceptance: 41.9, difficulty: 'Medium'},
    { id: 334, title: 'Increasing Triplet Subsequence', acceptance: 41.6, difficulty: 'Medium'},
    { id: 1834, title: 'Single-Threaded CPU', acceptance: 41.4, difficulty: 'Medium'},
    { id: 673, title: 'Number of Longest Increasing Subsequence', acceptance: 41.2, difficulty: 'Medium'},
    { id: 2135, title: 'Count Words Obtained After Adding a Letter', acceptance: 40.8, difficulty: 'Medium'},
    { id: 322, title: 'Coin Change', acceptance: 40.7, difficulty: 'Medium'},
    { id: 34, title: 'Find First and Last Position of Element in Sorted Array', acceptance: 40.3, difficulty: 'Medium'},
    { id: 662, title: 'Maximum Width of Binary Tree', acceptance: 40.3, difficulty: 'Medium'},
    { id: 146, title: 'LRU Cache', acceptance: 40.1, difficulty: 'Medium'},
    { id: 213, title: 'House Robber II', acceptance: 40.1, difficulty: 'Medium'},
    { id: 845, title: 'Longest Mountain in Array', acceptance: 39.9, difficulty: 'Medium'},
    { id: 79, title: 'Word Search', acceptance: 39.8, difficulty: 'Medium'},
    { id: 393, title: 'UTF-8 Validation', acceptance: 39.3, difficulty: 'Medium'},
    { id: 2131, title: 'Longest Palindrome by Concatenating Two Letter Words', acceptance: 39.0, difficulty: 'Medium'},
    { id: 2, title: 'Add Two Numbers', acceptance: 38.9, difficulty: 'Medium'},
    { id: 71, title: 'Simplify Path', acceptance: 38.9, difficulty: 'Medium'},
    { id: 307, title: 'Range Sum Query - Mutable', acceptance: 38.8, difficulty: 'Medium'},
    { id: 189, title: 'Rotate Array', acceptance: 38.7, difficulty: 'Medium'},
    { id: 954, title: 'Array of Doubled Pairs', acceptance: 38.7, difficulty: 'Medium'},
    { id: 19, title: 'Remove Nth Node From End of List', acceptance: 38.6, difficulty: 'Medium'},
    { id: 63, title: 'Unique Paths II', acceptance: 38.6, difficulty: 'Medium'},
    { id: 2007, title: 'Find Original Array From Doubled Array', acceptance: 38.4, difficulty: 'Medium'},
    { id: 1882, title: 'Process Tasks Using Servers', acceptance: 38.1, difficulty: 'Medium'},
    { id: 33, title: 'Search in Rotated Sorted Array', acceptance: 38.0, difficulty: 'Medium'},
    { id: 43, title: 'Multiply Strings', acceptance: 38.0, difficulty: 'Medium'},
    { id: 55, title: 'Jump Game', acceptance: 38.0, difficulty: 'Medium'},
    { id: 274, title: 'H-Index', acceptance: 37.8, difficulty: 'Medium'},
    { id: 57, title: 'Insert Interval', acceptance: 37.6, difficulty: 'Medium'},
    { id: 18, title: '4Sum', acceptance: 37.5, difficulty: 'Medium'},
    { id: 45, title: 'Jump Game II', acceptance: 37.5, difficulty: 'Medium'},
    { id: 918, title: 'Maximum Sum Circular Subarray', acceptance: 37.4, difficulty: 'Medium'},
    { id: 1146, title: 'Snapshot Array', acceptance: 37.1, difficulty: 'Medium'},
    { id: 1477, title: 'Find Two Non-overlapping Sub-arrays Each With Target Sum', acceptance: 36.9, difficulty: 'Medium'},
    { id: 31, title: 'Next Permutation', acceptance: 36.6, difficulty: 'Medium'},
    { id: 777, title: 'Swap Adjacent in LR String', acceptance: 36.6, difficulty: 'Medium'},
    { id: 837, title: 'New 21 Game', acceptance: 36.0, difficulty: 'Medium'},
    { id: 787, title: 'Cheapest Flights Within K Stops', acceptance: 35.9, difficulty: 'Medium'},
    { id: 1937, title: 'Maximum Number of Points with Cost', acceptance: 35.8, difficulty: 'Medium'},
    { id: 2162, title: 'Minimum Cost to Set Cooking Time', acceptance: 35.6, difficulty: 'Medium'},
    { id: 949, title: 'Largest Time for Given Digits', acceptance: 35.4, difficulty: 'Medium'},
    { id: 794, title: 'Valid Tic-Tac-Toe State', acceptance: 35.2, difficulty: 'Medium'},
    { id: 355, title: 'Design Twitter', acceptance: 35.1, difficulty: 'Medium'},
    { id: 365, title: 'Water and Jug Problem', acceptance: 35.1, difficulty: 'Medium'},
    { id: 97, title: 'Interleaving String', acceptance: 35.0, difficulty: 'Medium'},
    { id: 1996, title: 'The Number of Weak Characters in the Game', acceptance: 34.7, difficulty: 'Medium'},
    { id: 152, title: 'Maximum Product Subarray', acceptance: 34.6, difficulty: 'Medium'},
    { id: 130, title: 'Surrounded Regions', acceptance: 34.5, difficulty: 'Medium'},
    { id: 556, title: 'Next Greater Element III', acceptance: 33.9, difficulty: 'Medium'},
    { id: 686, title: 'Repeated String Match', acceptance: 33.7, difficulty: 'Medium'},
    { id: 678, title: 'Valid Parenthesis String', acceptance: 33.5, difficulty: 'Medium'},
    { id: 3, title: 'Longest Substring Without Repeating Characters', acceptance: 33.4, difficulty: 'Medium'},
    { id: 50, title: 'Pow(x, n)', acceptance: 32.5, difficulty: 'Medium'},
    { id: 5, title: 'Longest Palindromic Substring', acceptance: 32.2, difficulty: 'Medium'},
    { id: 1986, title: 'Minimum Number of Work Sessions to Finish the Tasks', acceptance: 32.1, difficulty: 'Medium'},
    { id: 2250, title: 'Count Number of Rectangles Containing Each Point', acceptance: 32.1, difficulty: 'Medium'},
    { id: 15, title: '3Sum', acceptance: 31.4, difficulty: 'Medium'},
    { id: 91, title: 'Decode Ways', acceptance: 30.6, difficulty: 'Medium'},
    { id: 402, title: 'Remove K Digits', acceptance: 30.5, difficulty: 'Medium'},
    { id: 2187, title: 'Minimum Time to Complete Trips', acceptance: 30.5, difficulty: 'Medium'},
    { id: 2271, title: 'Maximum White Tiles Covered by a Carpet', acceptance: 30.0, difficulty: 'Medium'},
    { id: 151, title: 'Reverse Words in a String', acceptance: 29.0, difficulty: 'Medium'},
    { id: 523, title: 'Continuous Subarray Sum', acceptance: 27.4, difficulty: 'Medium'},
    { id: 707, title: 'Design Linked List', acceptance: 27.1, difficulty: 'Medium'},
    { id: 7, title: 'Reverse Integer', acceptance: 26.8, difficulty: 'Medium'},
    { id: 29, title: 'Divide Two Integers', acceptance: 17.5, difficulty: 'Medium'},
    { id: 8, title: 'String to Integer (atoi)', acceptance: 16.6, difficulty: 'Medium'},
    { id: 1284, title: 'Minimum Number of Flips to Convert Binary Matrix to Zero Matrix', acceptance: 72.1, difficulty: 'Hard'},
    { id: 1944, title: 'Number of Visible People in a Queue', acceptance: 70.0, difficulty: 'Hard'},
    { id: 1074, title: 'Number of Submatrices That Sum to Target', acceptance: 66.4, difficulty: 'Hard'},
    { id: 847, title: 'Shortest Path Visiting All Nodes', acceptance: 61.4, difficulty: 'Hard'},
    { id: 51, title: 'N-Queens', acceptance: 60.6, difficulty: 'Hard'},
    { id: 2158, title: 'Amount of New Area Painted Each Day', acceptance: 59.6, difficulty: 'Hard'},
    { id: 778, title: 'Swim in Rising Water', acceptance: 59.2, difficulty: 'Hard'},
    { id: 632, title: 'Smallest Range Covering Elements from K Lists', acceptance: 59.0, difficulty: 'Hard'},
    { id: 42, title: 'Trapping Rain Water', acceptance: 57.0, difficulty: 'Hard'},
    { id: 312, title: 'Burst Balloons', acceptance: 56.5, difficulty: 'Hard'},
    { id: 753, title: 'Cracking the Safe', acceptance: 54.9, difficulty: 'Hard'},
    { id: 37, title: 'Sudoku Solver', acceptance: 54.7, difficulty: 'Hard'},
    { id: 297, title: 'Serialize and Deserialize Binary Tree', acceptance: 54.1, difficulty: 'Hard'},
    { id: 1240, title: 'Tiling a Rectangle with the Fewest Squares', acceptance: 53.7, difficulty: 'Hard'},
    { id: 410, title: 'Split Array Largest Sum', acceptance: 52.4, difficulty: 'Hard'},
    { id: 1793, title: 'Maximum Score of a Good Subarray', acceptance: 52.1, difficulty: 'Hard'},
    { id: 726, title: 'Number of Atoms', acceptance: 51.9, difficulty: 'Hard'},
    { id: 72, title: 'Edit Distance', acceptance: 51.3, difficulty: 'Hard'},
    { id: 329, title: 'Longest Increasing Path in a Matrix', acceptance: 51.3, difficulty: 'Hard'},
    { id: 1235, title: 'Maximum Profit in Job Scheduling', acceptance: 50.9, difficulty: 'Hard'},
    { id: 295, title: 'Find Median from Data Stream', acceptance: 50.5, difficulty: 'Hard'},
    { id: 920, title: 'Number of Music Playlists', acceptance: 50.2, difficulty: 'Hard'},
    { id: 679, title: '24 Game', acceptance: 48.9, difficulty: 'Hard'},
    { id: 23, title: 'Merge k Sorted Lists', acceptance: 47.4, difficulty: 'Hard'},
    { id: 407, title: 'Trapping Rain Water II', acceptance: 47.1, difficulty: 'Hard'},
    { id: 1499, title: 'Max Value of Equation', acceptance: 46.7, difficulty: 'Hard'},
    { id: 239, title: 'Sliding Window Maximum', acceptance: 46.3, difficulty: 'Hard'},
    { id: 839, title: 'Similar String Groups', acceptance: 46.1, difficulty: 'Hard'},
    { id: 815, title: 'Bus Routes', acceptance: 45.3, difficulty: 'Hard'},
    { id: 827, title: 'Making A Large Island', acceptance: 44.8, difficulty: 'Hard'},
    { id: 1345, title: 'Jump Game IV', acceptance: 44.3, difficulty: 'Hard'},
    { id: 715, title: 'Range Module', acceptance: 43.9, difficulty: 'Hard'},
    { id: 1293, title: 'Shortest Path in a Grid with Obstacles Elimination', acceptance: 43.6, difficulty: 'Hard'},
    { id: 818, title: 'Race Car', acceptance: 43.2, difficulty: 'Hard'},
    { id: 85, title: 'Maximal Rectangle', acceptance: 43.1, difficulty: 'Hard'},
    { id: 403, title: 'Frog Jump', acceptance: 43.0, difficulty: 'Hard'},
    { id: 140, title: 'Word Break II', acceptance: 42.6, difficulty: 'Hard'},
    { id: 60, title: 'Permutation Sequence', acceptance: 42.5, difficulty: 'Hard'},
    { id: 1000, title: 'Minimum Cost to Merge Stones', acceptance: 42.1, difficulty: 'Hard'},
    { id: 315, title: 'Count of Smaller Numbers After Self', acceptance: 42.0, difficulty: 'Hard'},
    { id: 1397, title: 'Find All Good Strings', acceptance: 41.8, difficulty: 'Hard'},
    { id: 164, title: 'Maximum Gap', acceptance: 41.7, difficulty: 'Hard'},
    { id: 1606, title: 'Find Servers That Handled Most Number of Requests', acceptance: 41.2, difficulty: 'Hard'},
    { id: 1632, title: 'Rank Transform of a Matrix', acceptance: 40.8, difficulty: 'Hard'},
    { id: 2188, title: 'Minimum Time to Finish the Race', acceptance: 40.8, difficulty: 'Hard'},
    { id: 224, title: 'Basic Calculator', acceptance: 40.7, difficulty: 'Hard'},
    { id: 552, title: 'Student Attendance Record II', acceptance: 40.7, difficulty: 'Hard'},
    { id: 332, title: 'Reconstruct Itinerary', acceptance: 40.3, difficulty: 'Hard'},
    { id: 460, title: 'LFU Cache', acceptance: 39.7, difficulty: 'Hard'},
    { id: 76, title: 'Minimum Window Substring', acceptance: 39.3, difficulty: 'Hard'},
    { id: 218, title: 'The Skyline Problem', acceptance: 38.9, difficulty: 'Hard'},
    { id: 354, title: 'Russian Doll Envelopes', acceptance: 38.8, difficulty: 'Hard'},
    { id: 975, title: 'Odd Even Jump', acceptance: 38.8, difficulty: 'Hard'},
    { id: 124, title: 'Binary Tree Maximum Path Sum', acceptance: 37.8, difficulty: 'Hard'},
    { id: 212, title: 'Word Search II', acceptance: 37.7, difficulty: 'Hard'},
    { id: 1610, title: 'Maximum Number of Visible Points', acceptance: 37.1, difficulty: 'Hard'},
    { id: 41, title: 'First Missing Positive', acceptance: 36.1, difficulty: 'Hard'},
    { id: 1095, title: 'Find in Mountain Array', acceptance: 35.9, difficulty: 'Hard'},
    { id: 871, title: 'Minimum Number of Refueling Stops', acceptance: 35.8, difficulty: 'Hard'},
    { id: 127, title: 'Word Ladder', acceptance: 35.7, difficulty: 'Hard'},
    { id: 68, title: 'Text Justification', acceptance: 35.6, difficulty: 'Hard'},
    { id: 4, title: 'Median of Two Sorted Arrays', acceptance: 34.4, difficulty: 'Hard'},
    { id: 2242, title: 'Maximum Score of a Node Sequence', acceptance: 34.2, difficulty: 'Hard'},
    { id: 188, title: 'Best Time to Buy and Sell Stock IV', acceptance: 34.1, difficulty: 'Hard'},
    { id: 803, title: 'Bricks Falling When Hit', acceptance: 34.0, difficulty: 'Hard'},
    { id: 2092, title: 'Find All People With Secret', acceptance: 33.9, difficulty: 'Hard'},
    { id: 233, title: 'Number of Digit One', acceptance: 33.8, difficulty: 'Hard'},
    { id: 32, title: 'Longest Valid Parentheses', acceptance: 32.3, difficulty: 'Hard'},
    { id: 2132, title: 'Stamping the Grid', acceptance: 29.7, difficulty: 'Hard'},
    { id: 10, title: 'Regular Expression Matching', acceptance: 28.3, difficulty: 'Hard'},
    { id: 30, title: 'Substring with Concatenation of All Words', acceptance: 28.3, difficulty: 'Hard'},
    { id: 44, title: 'Wildcard Matching', acceptance: 26.6, difficulty: 'Hard'},
    { id: 564, title: 'Find the Closest Palindrome', acceptance: 21.6, difficulty: 'Hard'},
    { id: 420, title: 'Strong Password Checker', acceptance: 14.3, difficulty: 'Hard' },
];

let difficultyChart, acceptanceChart;
let activeDifficulties = ['Easy', 'Medium', 'Hard'];
let showImportantOnly = false;
let showSolvedOnly = false;
let filterTimeout;

const difficultyColors = {
    Easy: 'rgba(34, 197, 94, 0.7)',
    Medium: 'rgba(234, 179, 8, 0.7)',
    Hard: 'rgba(239, 68, 68, 0.7)',
};

const difficultyBorderColors = {
    Easy: 'rgba(34, 197, 94, 1)',
    Medium: 'rgba(234, 179, 8, 1)',
    Hard: 'rgba(239, 68, 68, 1)',
};

document.addEventListener('DOMContentLoaded', () => {
    initProblemsData();
    setupEventListeners();
    initializeCharts();
    applyFilters();
    initDarkMode();
});

function debounce(func, delay) {
    return function(...args) {
        clearTimeout(filterTimeout);
        filterTimeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function initDarkMode() {
    const toggle = document.getElementById('dark-mode-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    }

    toggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        moonIcon.classList.toggle('hidden');
        sunIcon.classList.toggle('hidden');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        updateChartColors();
    });
}

function setupEventListeners() {
    document.getElementById('search-input').addEventListener('input', debounce(applyFilters, 300));
    
    document.getElementById('acceptance-slider').addEventListener('input', (e) => {
        document.getElementById('acceptance-range-label').textContent = `0% - ${e.target.value}%`;
        debounce(applyFilters, 300)();
    });

    document.getElementById('difficulty-filters').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const difficulty = e.target.dataset.difficulty;
            const index = activeDifficulties.indexOf(difficulty);
            if (index > -1) {
                activeDifficulties.splice(index, 1);
                 e.target.classList.remove(...getButtonColorClasses(difficulty, true));
                 e.target.classList.add(...getButtonColorClasses(difficulty, false));
            } else {
                activeDifficulties.push(difficulty);
                e.target.classList.remove(...getButtonColorClasses(difficulty, false));
                e.target.classList.add(...getButtonColorClasses(difficulty, true));
            }
            applyFilters();
        }
    });
    
    document.getElementById('show-important-filter').addEventListener('click', (e) => {
        showImportantOnly = !showImportantOnly;
        e.currentTarget.classList.toggle('bg-purple-500');
        e.currentTarget.classList.toggle('text-white');
        e.currentTarget.classList.toggle('bg-transparent');
        e.currentTarget.classList.toggle('text-purple-500');
        applyFilters();
    });

    document.getElementById('show-solved-filter').addEventListener('click', (e) => {
        showSolvedOnly = !showSolvedOnly;
        e.currentTarget.classList.toggle('bg-cyan-500');
        e.currentTarget.classList.toggle('text-white');
        e.currentTarget.classList.toggle('bg-transparent');
        e.currentTarget.classList.toggle('text-cyan-500');
        applyFilters();
    });
    
    document.getElementById('problem-container').addEventListener('click', (e) => {
        const btn = e.target.closest('.status-btn');
        if (btn) {
            const problemId = parseInt(btn.dataset.id, 10);
            if (btn.classList.contains('important-btn')) {
                toggleStatus(problemId, 'important');
            } else if (btn.classList.contains('solved-btn')) {
                toggleStatus(problemId, 'solved');
            }
        }
    });
}

function getButtonColorClasses(difficulty, isActive) {
    const color = difficulty.toLowerCase();
    const colorMap = {
        'easy': { active: ['bg-green-500', 'text-white'], inactive: ['bg-transparent', 'text-green-500']},
        'medium': { active: ['bg-yellow-500', 'text-white'], inactive: ['bg-transparent', 'text-yellow-500']},
        'hard': { active: ['bg-red-500', 'text-white'], inactive: ['bg-transparent', 'text-red-500']}
    }
    return isActive ? colorMap[color].active : colorMap[color].inactive;
}

function applyFilters() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const acceptanceThreshold = parseInt(document.getElementById('acceptance-slider').value, 10);
    const noResultsEl = document.getElementById('no-results');

    const filteredProblems = problemsData.filter(p => {
        if (showImportantOnly && !p.important) return false;
        if (showSolvedOnly && !p.solved) return false;
        
        const titleMatch = p.title.toLowerCase().includes(searchTerm);
        const difficultyMatch = activeDifficulties.includes(p.difficulty);
        const acceptanceMatch = p.acceptance <= acceptanceThreshold;
        return titleMatch && difficultyMatch && acceptanceMatch;
    });

    noResultsEl.classList.toggle('hidden', filteredProblems.length > 0);

    requestAnimationFrame(() => {
        renderProblems(filteredProblems);
        updateStatsAndCharts(filteredProblems);
    });
}

function toKebabCase(str) {
    return str.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
}

function getDifficultyClass(difficulty) {
    switch (difficulty) {
        case 'Easy': return { bg: 'bg-green-100 dark:bg-green-900/50', text: 'text-green-800 dark:text-green-300', border: 'border-green-400 dark:border-green-600' };
        case 'Medium': return { bg: 'bg-yellow-100 dark:bg-yellow-900/50', text: 'text-yellow-800 dark:text-yellow-300', border: 'border-yellow-400 dark:border-yellow-600' };
        case 'Hard': return { bg: 'bg-red-100 dark:bg-red-900/50', text: 'text-red-800 dark:text-red-300', border: 'border-red-400 dark:border-red-600' };
        default: return { bg: 'bg-slate-100 dark:bg-slate-700', text: 'text-slate-800 dark:text-slate-200', border: 'border-slate-400 dark:border-slate-600' };
    }
}

function renderProblems(problems) {
    const container = document.getElementById('problem-container');
    const fragment = document.createDocumentFragment();

    problems.forEach(p => {
        const difficultyClasses = getDifficultyClass(p.difficulty);
        const problemUrl = `https://leetcode.com/problems/${toKebabCase(p.title)}/`;
        
        const cardDiv = document.createElement('div');
        cardDiv.className = `problem-card bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border ${difficultyClasses.border}`;
        cardDiv.dataset.problemId = p.id;

        cardDiv.innerHTML = `
            <div>
                 <div class="flex justify-between items-start mb-2">
                    <p class="text-sm font-semibold ${difficultyClasses.text} pr-2">${p.id}. ${p.title}</p>
                    <div class="flex items-center space-x-2">
                        <button class="status-btn important-btn ${p.important ? 'marked' : 'unmarked'}" data-id="${p.id}" aria-label="Mark as important">
                           ${p.important ? '&#9733;' : '&#9734;'}
                        </button>
                        <button class="status-btn solved-btn ${p.solved ? 'marked' : 'unmarked'}" data-id="${p.id}" aria-label="Mark as solved">
                           ${p.solved ? '&#9989;' : '&#10063;'}
                        </button>
                    </div>
                </div>
                <div class="flex justify-between items-center text-sm text-slate-600 dark:text-slate-400 mt-4">
                    <span class="px-2 py-1 ${difficultyClasses.bg} ${difficultyClasses.text} text-xs font-bold rounded-full">${p.difficulty}</span>
                    <span>Acceptance: <span class="font-bold">${p.acceptance}%</span></span>
                </div>
            </div>
            <a href="${problemUrl}" target="_blank" rel="noopener noreferrer" class="block w-full bg-blue-600 text-white text-center font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-4 dark:bg-blue-500 dark:hover:bg-blue-600">
                View Problem
            </a>
        `;
        fragment.appendChild(cardDiv);
    });

    container.innerHTML = '';
    container.appendChild(fragment);
}


function updateStatsAndCharts(filteredProblems) {
    const total = filteredProblems.length;
    let easy = 0, medium = 0, hard = 0;
    const acceptanceBins = new Array(10).fill(0);

    for(const p of filteredProblems) {
        if(p.difficulty === 'Easy') easy++;
        else if (p.difficulty === 'Medium') medium++;
        else if (p.difficulty === 'Hard') hard++;
        
        const binIndex = Math.min(Math.floor(p.acceptance / 10), 9);
        acceptanceBins[binIndex]++;
    }
    
    document.getElementById('total-stat').textContent = total;
    document.getElementById('easy-stat').textContent = easy;
    document.getElementById('medium-stat').textContent = medium;
    document.getElementById('hard-stat').textContent = hard;
    
    difficultyChart.data.datasets[0].data = [easy, medium, hard];
    acceptanceChart.data.datasets[0].data = acceptanceBins;
    
    difficultyChart.update('none');
    acceptanceChart.update('none');
}

function getChartColors() {
    const isDark = document.documentElement.classList.contains('dark');
    return {
        ticksColor: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
        gridColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        legendColor: isDark ? '#FFF' : '#333'
    };
}

function updateChartColors() {
    const colors = getChartColors();
    
    // Update Difficulty Chart
    difficultyChart.options.plugins.legend.labels.color = colors.legendColor;

    // Update Acceptance Chart
    acceptanceChart.options.scales.x.ticks.color = colors.ticksColor;
    acceptanceChart.options.scales.y.ticks.color = colors.ticksColor;
    acceptanceChart.options.scales.x.grid.color = colors.gridColor;
    acceptanceChart.options.scales.y.grid.color = colors.gridColor;
    
    difficultyChart.update();
    acceptanceChart.update();
}

function initializeCharts() {
    const colors = getChartColors();
    const diffCtx = document.getElementById('difficultyChart').getContext('2d');
    difficultyChart = new Chart(diffCtx, {
        type: 'doughnut',
        data: {
            labels: ['Easy', 'Medium', 'Hard'],
            datasets: [{
                label: 'Difficulty',
                data: [0, 0, 0],
                backgroundColor: [difficultyColors.Easy, difficultyColors.Medium, difficultyColors.Hard],
                borderColor: [difficultyBorderColors.Easy, difficultyBorderColors.Medium, difficultyBorderColors.Hard],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            plugins: {
                legend: { 
                    position: 'top',
                    labels: {
                        color: colors.legendColor
                    }
                }
            }
        }
    });

    const acceptCtx = document.getElementById('acceptanceChart').getContext('2d');
    const acceptanceLabels = Array.from({length: 10}, (_, i) => `${i*10}-${i*10+10}%`);
    
    acceptanceChart = new Chart(acceptCtx, {
        type: 'bar',
        data: {
            labels: acceptanceLabels,
            datasets: [{
                label: '# of Problems',
                data: [],
                backgroundColor: 'rgba(59, 130, 246, 0.7)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            scales: {
                y: { 
                    beginAtZero: true,
                    ticks: { color: colors.ticksColor },
                    grid: { color: colors.gridColor }
                },
                x: { 
                    ticks: { color: colors.ticksColor, autoSkip: true, maxRotation: 0, minRotation: 0 },
                    grid: { color: colors.gridColor }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function initProblemsData() {
    const important = JSON.parse(localStorage.getItem('importantProblems') || '[]');
    const solved = JSON.parse(localStorage.getItem('solvedProblems') || '[]');
    const importantSet = new Set(important);
    const solvedSet = new Set(solved);
    
    problemsData.forEach(p => {
        p.important = importantSet.has(p.id);
        p.solved = solvedSet.has(p.id);
    });
}

function saveStatus(statusType) {
    const ids = problemsData.filter(p => p[statusType]).map(p => p.id);
    localStorage.setItem(`${statusType}Problems`, JSON.stringify(ids));
}

function toggleStatus(problemId, statusType) {
    const problem = problemsData.find(p => p.id === problemId);
    if (problem) {
        problem[statusType] = !problem[statusType];
        saveStatus(statusType);
        
        const card = document.querySelector(`.problem-card[data-problem-id="${problemId}"]`);
        if (card) {
            const btn = card.querySelector(`.${statusType}-btn`);
            btn.classList.toggle('marked', problem[statusType]);
            btn.classList.toggle('unmarked', !problem[statusType]);
            if(statusType === 'important') {
                 btn.innerHTML = problem.important ? '&#9733;' : '&#9734;';
            } else {
                 btn.innerHTML = problem.solved ? '&#9989;' : '&#10063;';
            }
        }

        if ((showImportantOnly && statusType === 'important') || (showSolvedOnly && statusType === 'solved')) {
            applyFilters();
        }
    }
}

