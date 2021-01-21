var word = prompt("Give a word");
var shiftBy = Number(prompt("What's the offset?"));
var size = word.length;
var encrypt = "";
var temp = 0;
var i = 0;


for (i = 0; i < size; i++) {
   temp = word.charCodeAt(i);
   if ((temp >= 65) && (temp <= 90)) {
      temp = (((temp - 65 + shiftBy) % 26) + 65);
   }
   else if ((temp >= 97) && (temp <= 122)) {
      temp = (((temp - 97 + shiftBy) % 26) + 97);
   }
   else {
      temp = "?";
   }
   encrypt += String.fromCharCode(temp);
};

