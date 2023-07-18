const readline = require('readline');

function isBalanced(expression) {
  const stack = [];
  const openingBrackets = ['(', '[', '{'];
  const closingBrackets = [')', ']', '}'];
  const bracketPairs = {')': '(', ']': '[', '}': '{'};

  for (let char of expression) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (!stack.length || stack[stack.length - 1] !== bracketPairs[char]) {
        return "NO";
      }
      stack.pop();
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan urutan tanda kurung: ', (expression) => {
  const result = isBalanced(expression);
  console.log("Output:", result);
  rl.close();
});
