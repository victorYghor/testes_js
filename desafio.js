var count = 0;
var ideas = ["coffee","donuts","time","toffee"];
var set = new Set(ideas);

for (var i = 0; i < ideas.length; i++) {
  for (var j = i + 1; j < ideas.length; j++) {
    var a = ideas[i];
    var b = ideas[j];
    var a1 = b[0] + a.substring(1);
    var b1 = a[0] + b.substring(1);
    if (!set.has(a1) && !set.has(b1)) {
      count++;
    }
  }
}

console.log(count);