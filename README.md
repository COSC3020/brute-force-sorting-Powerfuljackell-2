# Brute-Force Sorting

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice." 

Used prior approved work at: https://github.com/COSC3020/brute-force-sorting-Powerfuljackell-1

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

The runtime complexity would be $O(n!\cdot n)$ as each value must be iterated over to create a new permutation each time, with each permutation creating a new unique combiniation of the input array, thus, $1 * 2 * 3 * 4 ...$. The additional *n is attributed to the isSorted() function, as it adds an additional check each time an iteration occurs, where it checks each value within the current permutation to see if the given array is sorted. A best case input would be a set of values that is already sorted, as naturally the first permutation is already input first making $O(n)$. Worst case is average, as each permutation is just as likely as the other, making my worst case $O(n!\cdot n)$. If they where truly randomized and not systematically iterated through, AND they did not have repeat checking in place, the worst case could potentially be infinite, as the permutation generator could just go on forever without finding the correct permutation.

