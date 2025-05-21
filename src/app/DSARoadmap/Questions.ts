type Question = {
  name: string;
  difficulty: string;
  completed: boolean;
};

type TopicQuestions = {
  "Arrays & Hashing": Question[];
  "Two Pointer": Question[];
  "Stack": Question[];
  "Binary Search": Question[];
  "Sliding Window": Question[];
  "Linked List": Question[];
  "Trees": Question[];
  "Tries": Question[];
  "Heap / Priority Queue": Question[];
  "Backtracking": Question[];
  "Graph": Question[];
  "1D DP": Question[];
  "2D DP": Question[];
  "Greedy": Question[];
  "Advanced Graphs": Question[];
};

export const topicQuestions: TopicQuestions = {
  "Arrays & Hashing": [
    { name: "Two Sum", difficulty: "Easy", completed: true },
    { name: "Contains Duplicate", difficulty: "Easy", completed: true },
    { name: "Product of Array Except Self", difficulty: "Medium", completed: true },
    { name: "Maximum Subarray", difficulty: "Medium", completed: false },
    { name: "Encode and Decode Strings", difficulty: "Medium", completed: true },
    { name: "Longest Consecutive Sequence", difficulty: "Medium", completed: false },
    { name: "Valid Sudoku", difficulty: "Medium", completed: true },
    { name: "Top K Frequent Elements", difficulty: "Medium", completed: false },
    { name: "Group Anagrams", difficulty: "Medium", completed: true },
    { name: "4Sum", difficulty: "Hard", completed: false }
  ],
  "Two Pointer": [
    { name: "Valid Palindrome", difficulty: "Easy", completed: true },
    { name: "Two Sum II", difficulty: "Medium", completed: true },
    { name: "3Sum", difficulty: "Medium", completed: false },
    { name: "Container With Most Water", difficulty: "Medium", completed: true },
    { name: "Trapping Rain Water", difficulty: "Hard", completed: false },
    { name: "Remove Duplicates from Sorted Array", difficulty: "Easy", completed: true },
    { name: "Move Zeroes", difficulty: "Easy", completed: true },
    { name: "Sort Colors", difficulty: "Medium", completed: false },
    { name: "Longest Substring Without Repeating Characters", difficulty: "Medium", completed: true },
    { name: "Minimum Window Substring", difficulty: "Hard", completed: false }
  ],
  "Stack": [
    { name: "Valid Parentheses", difficulty: "Easy", completed: true },
    { name: "Min Stack", difficulty: "Medium", completed: false },
    { name: "Evaluate Reverse Polish Notation", difficulty: "Medium", completed: true },
    { name: "Generate Parentheses", difficulty: "Medium", completed: false },
    { name: "Daily Temperatures", difficulty: "Medium", completed: true },
    { name: "Car Fleet", difficulty: "Medium", completed: false },
    { name: "Largest Rectangle in Histogram", difficulty: "Hard", completed: false },
    { name: "Basic Calculator", difficulty: "Hard", completed: false },
    { name: "Remove K Digits", difficulty: "Medium", completed: true },
    { name: "Decode String", difficulty: "Medium", completed: true }
  ],
  "Binary Search": [
    { name: "Binary Search", difficulty: "Easy", completed: true },
    { name: "Search a 2D Matrix", difficulty: "Medium", completed: false },
    { name: "Koko Eating Bananas", difficulty: "Medium", completed: true },
    { name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", completed: false },
    { name: "Search in Rotated Sorted Array", difficulty: "Medium", completed: true },
    { name: "Time Based Key-Value Store", difficulty: "Medium", completed: false },
    { name: "Median of Two Sorted Arrays", difficulty: "Hard", completed: false },
    { name: "Find Peak Element", difficulty: "Medium", completed: true },
    { name: "Capacity To Ship Packages", difficulty: "Medium", completed: false },
    { name: "Split Array Largest Sum", difficulty: "Hard", completed: false }
  ],
  "Sliding Window": [
    { name: "Best Time to Buy and Sell Stock", difficulty: "Easy", completed: true },
    { name: "Longest Substring Without Repeating Characters", difficulty: "Medium", completed: true },
    { name: "Longest Repeating Character Replacement", difficulty: "Medium", completed: false },
    { name: "Permutation in String", difficulty: "Medium", completed: false },
    { name: "Minimum Window Substring", difficulty: "Hard", completed: false },
    { name: "Sliding Window Maximum", difficulty: "Hard", completed: false },
    { name: "Find All Anagrams in a String", difficulty: "Medium", completed: true },
    { name: "Maximum Average Subarray", difficulty: "Easy", completed: true },
    { name: "Fruit Into Baskets", difficulty: "Medium", completed: false },
    { name: "Substring with Concatenation of All Words", difficulty: "Hard", completed: false }
  ],
  "Linked List": [
    { name: "Reverse Linked List", difficulty: "Easy", completed: true },
    { name: "Merge Two Sorted Lists", difficulty: "Easy", completed: true },
    { name: "Reorder List", difficulty: "Medium", completed: false },
    { name: "Remove Nth Node From End of List", difficulty: "Medium", completed: true },
    { name: "Copy List with Random Pointer", difficulty: "Medium", completed: false },
    { name: "Add Two Numbers", difficulty: "Medium", completed: true },
    { name: "Linked List Cycle", difficulty: "Easy", completed: true },
    { name: "Find the Duplicate Number", difficulty: "Medium", completed: false },
    { name: "LRU Cache", difficulty: "Medium", completed: false },
    { name: "Merge k Sorted Lists", difficulty: "Hard", completed: false }
  ],
  "Trees": [
    { name: "Invert Binary Tree", difficulty: "Easy", completed: true },
    { name: "Maximum Depth of Binary Tree", difficulty: "Easy", completed: true },
    { name: "Same Tree", difficulty: "Easy", completed: true },
    { name: "Subtree of Another Tree", difficulty: "Easy", completed: false },
    { name: "Lowest Common Ancestor", difficulty: "Medium", completed: false },
    { name: "Binary Tree Level Order Traversal", difficulty: "Medium", completed: true },
    { name: "Validate Binary Search Tree", difficulty: "Medium", completed: false },
    { name: "Serialize and Deserialize Binary Tree", difficulty: "Hard", completed: false },
    { name: "Construct Binary Tree from Preorder and Inorder", difficulty: "Medium", completed: false },
    { name: "Binary Tree Maximum Path Sum", difficulty: "Hard", completed: false }
  ],
  "Tries": [
    { name: "Implement Trie", difficulty: "Medium", completed: false },
    { name: "Design Add and Search Words Data Structure", difficulty: "Medium", completed: false },
    { name: "Word Search II", difficulty: "Hard", completed: false },
    { name: "Longest Word in Dictionary", difficulty: "Medium", completed: true },
    { name: "Maximum XOR of Two Numbers", difficulty: "Medium", completed: false },
    { name: "Concatenated Words", difficulty: "Hard", completed: false },
    { name: "Prefix and Suffix Search", difficulty: "Hard", completed: false },
    { name: "Palindrome Pairs", difficulty: "Hard", completed: false },
    { name: "Replace Words", difficulty: "Medium", completed: true },
    { name: "Map Sum Pairs", difficulty: "Medium", completed: false }
  ],
  "Heap / Priority Queue": [
    { name: "Kth Largest Element in a Stream", difficulty: "Easy", completed: true },
    { name: "Last Stone Weight", difficulty: "Easy", completed: true },
    { name: "K Closest Points to Origin", difficulty: "Medium", completed: false },
    { name: "Task Scheduler", difficulty: "Medium", completed: false },
    { name: "Design Twitter", difficulty: "Medium", completed: false },
    { name: "Find Median from Data Stream", difficulty: "Hard", completed: false },
    { name: "Merge k Sorted Lists", difficulty: "Hard", completed: false },
    { name: "Top K Frequent Words", difficulty: "Medium", completed: true },
    { name: "Reorganize String", difficulty: "Medium", completed: false },
    { name: "Minimum Cost to Connect Sticks", difficulty: "Medium", completed: true }
  ],
  "Backtracking": [
    { name: "Subsets", difficulty: "Medium", completed: false },
    { name: "Combination Sum", difficulty: "Medium", completed: true },
    { name: "Permutations", difficulty: "Medium", completed: false },
    { name: "Subsets II", difficulty: "Medium", completed: false },
    { name: "Combination Sum II", difficulty: "Medium", completed: false },
    { name: "Word Search", difficulty: "Medium", completed: true },
    { name: "Palindrome Partitioning", difficulty: "Medium", completed: false },
    { name: "Letter Combinations of a Phone Number", difficulty: "Medium", completed: true },
    { name: "N-Queens", difficulty: "Hard", completed: false },
    { name: "Sudoku Solver", difficulty: "Hard", completed: false }
  ],
  "Graph": [
    { name: "Number of Islands", difficulty: "Medium", completed: true },
    { name: "Clone Graph", difficulty: "Medium", completed: false },
    { name: "Max Area of Island", difficulty: "Medium", completed: false },
    { name: "Pacific Atlantic Water Flow", difficulty: "Medium", completed: false },
    { name: "Surrounded Regions", difficulty: "Medium", completed: false },
    { name: "Rotting Oranges", difficulty: "Medium", completed: true },
    { name: "Course Schedule", difficulty: "Medium", completed: false },
    { name: "Course Schedule II", difficulty: "Medium", completed: false },
    { name: "Redundant Connection", difficulty: "Medium", completed: true },
    { name: "Word Ladder", difficulty: "Hard", completed: false }
  ],
  "1D DP": [
    { name: "Climbing Stairs", difficulty: "Easy", completed: true },
    { name: "House Robber", difficulty: "Medium", completed: false },
    { name: "Word Break", difficulty: "Medium", completed: false },
    { name: "Coin Change", difficulty: "Medium", completed: false },
    { name: "Longest Increasing Subsequence", difficulty: "Medium", completed: false },
    { name: "Partition Equal Subset Sum", difficulty: "Medium", completed: false },
    { name: "Decode Ways", difficulty: "Medium", completed: true },
    { name: "Unique Paths", difficulty: "Medium", completed: false },
    { name: "Jump Game", difficulty: "Medium", completed: true },
    { name: "Perfect Squares", difficulty: "Medium", completed: false }
  ],
  "2D DP": [
    { name: "Unique Paths II", difficulty: "Medium", completed: false },
    { name: "Longest Common Subsequence", difficulty: "Medium", completed: false },
    { name: "Edit Distance", difficulty: "Hard", completed: false },
    { name: "Best Time to Buy and Sell Stock with Cooldown", difficulty: "Medium", completed: false },
    { name: "Coin Change 2", difficulty: "Medium", completed: false },
    { name: "Target Sum", difficulty: "Medium", completed: false },
    { name: "Interleaving String", difficulty: "Medium", completed: false },
    { name: "Longest Palindromic Substring", difficulty: "Medium", completed: true },
    { name: "Minimum Path Sum", difficulty: "Medium", completed: false },
    { name: "Maximal Square", difficulty: "Medium", completed: false }
  ],
  "Greedy": [
    { name: "Maximum Subarray", difficulty: "Easy", completed: true },
    { name: "Jump Game", difficulty: "Medium", completed: true },
    { name: "Jump Game II", difficulty: "Medium", completed: false },
    { name: "Gas Station", difficulty: "Medium", completed: false },
    { name: "Hand of Straights", difficulty: "Medium", completed: false },
    { name: "Merge Triplets to Form Target", difficulty: "Medium", completed: false },
    { name: "Partition Labels", difficulty: "Medium", completed: true },
    { name: "Valid Parenthesis String", difficulty: "Medium", completed: false },
    { name: "Task Scheduler", difficulty: "Medium", completed: false },
    { name: "Minimum Deletions to Make Character Frequencies Unique", difficulty: "Medium", completed: true }
  ],
  "Advanced Graphs": [
    { name: "Reconstruct Itinerary", difficulty: "Hard", completed: false },
    { name: "Min Cost to Connect All Points", difficulty: "Medium", completed: false },
    { name: "Network Delay Time", difficulty: "Medium", completed: false },
    { name: "Swim in Rising Water", difficulty: "Hard", completed: false },
    { name: "Cheapest Flights Within K Stops", difficulty: "Medium", completed: false },
    { name: "Alien Dictionary", difficulty: "Hard", completed: false },
    { name: "Graph Valid Tree", difficulty: "Medium", completed: false },
    { name: "Number of Connected Components", difficulty: "Medium", completed: true },
    { name: "Sequence Reconstruction", difficulty: "Medium", completed: false },
    { name: "Minimum Height Trees", difficulty: "Medium", completed: false }
  ]
};