
// Step 1: Take the following lyrics as a long string and use the split string method to change it
// to an array of string
// Step 2: Iterate thru each string and when a string has the letter ‘s’ in it replace it with ‘$’
// Step 3: join the array back into a string again using ‘ ‘ as a separator with the join string
// method.
// Step 4: Log the new string to your screen

// Your going to apply this to:

// Quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede
// Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or
// Montero Jeep I can't call it, the beats make me falling asleep I keep falling,
// but never falling six feet deep I'm out for presidents to represent me, I'm out
// for presidents to represent me, I'm out for dead presidents to represent me, "

var lyrics = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me";
// var res = lyrics.split("");
var res = lyrics.replace(/s/g,"$");
// var lyrics = lyrics.join(",", stringArray);
console.log(res)
