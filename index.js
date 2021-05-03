const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


//NOTE: This lab is challenging! You will need to iterate through the tutorials array, modifying the name of each tutorial. To do this, you will also need to access and modify each individual word.

//titles to be "title case", in other words, the first letter of each word should be capitalized. Create a new array containing the names of the tutorials with proper title case formatting. For example, `'what does the this keyword mean?'` should become `'What Does The This Keyword Mean?'`.

const titleCased = ()=> {return tutorials.map(function(string){
  return string.split(' ').map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ')
})}




//Some questions to consider:

//How can we "iterate" through individual words in a string?
//Can we execute an interation inside an iteration? How?
//How can we capitalize just the first letter in a word?
//A couple of hints:

//Break the task into smaller chunks: using the console or a REPL, start by figuring out how to modify one individual element in the tutorials array. Once you've got that working, then figure out how to update the array itself.
//Use Google!!