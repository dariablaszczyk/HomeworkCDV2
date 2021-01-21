const permutator = (inputArr) => {
   let result = [];

   const permute = (arr, memo = []) => {
      if (arr.length === 0) {
         result.push(memo)
      } else {
         for (let i = 0; i < arr.length; i++) {
            let curr = arr.slice();
            let next = curr.splice(i, 1);
            permute(curr.slice(), memo.concat(next))
         }
      }
   }
   permute(inputArr)
   return result;
}