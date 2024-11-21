function isSorted(a){
    for(var i = 1; i < a.length; i++)
        if (a[i] < a[i-1])
            return false;
    return true;
}
 
function permutations(res, nums, l, h)  
{ 
    if(res.Sorted) return;
    // Base case 
    // Add the vector to result and return
    if (l == h)  
    {
        res.iter++;
        if(isSorted(nums,nums.length)){
            res.Sorted = true;
            //res = nums.slice(0);
            //console.log(res);
            return;
        }
    } 
  
    // Permutations made 
    for(let i = l; i <= h; i++)  
    { 
        // Swapping 
        let temp = nums[l]; 
        nums[l] = nums[i]; 
        nums[i] = temp; 
  
        // Calling permutations for 
        // next greater value of l 
        permutations(res, nums, l + 1, h); 
        if(res.Sorted){
            return;
        }
        // Backtracking 
        temp = nums[l]; 
        nums[l] = nums[i]; 
        nums[i] = temp; 
    }
} 
  
// Function to get the permutations 
function permutationSort(nums) 
{ 
    // Declaring result variable 
    let x = nums.length - 1; 
    let res = {'iter': 0, 'true': false};

    if(nums.length <= 1){
        return res.iter;
    }
      
    // Calling permutations for the first 
    // time by passing l 
    // as 0 and h = nums.size()-1 
    permutations(res, nums, 0, x); 
    return res.iter; 
}