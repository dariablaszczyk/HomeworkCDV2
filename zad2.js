const rev = function (x) {
   let array = x.toString.split("");
   let y = array.reverse();
   return Number(y.join(""));
}