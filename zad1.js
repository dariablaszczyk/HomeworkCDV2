function getClass(obj) {
   if (typeof obj === "string") return "It's a string";
   if (typeof obj === "number") return "It's a number";
   if (typeof obj === "boolean") return "It's a boolean";
   if (typeof obj === "function") return "It's a function";
   if (typeof obj === "undefined") return "Object undefined";
   if (obj === null) return "null";
   return `Object constructor name is ${obj.constructor.name} and type of object is ${typeof(obj)}`;
 }
