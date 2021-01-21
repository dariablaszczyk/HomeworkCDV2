let arr = [1, [2], [[3, 4], [5]]];

const flatten = function (array) {
   let flatMap = [];
   array.forEach(function (val) {
      if (Array.isArray(val)) {
         flatMap = flatMap.concat(flatten(val))
      } else {
         flatMap.push(val)
      }
   });
   return flatMap;
}