function isBalanced(expression) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
    const bracketPairs = {')': '(', ']': '[', '}': '{'};
  
    for (let char of expression) {
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        if (stack.length === 0 || stack[stack.length - 1] !== bracketPairs[char]) {
          return "NO";
        }
        stack.pop();
      }
    }
  
    return stack.length === 0 ? "YES" : "NO";
  }
  
  // Menerima input dari pengguna
  const expression = prompt("Masukkan urutan tanda kurung:");
  
  // Memanggil fungsi untuk memeriksa keseimbangan tanda kurung
  const result = isBalanced(expression);
  
  // Mencetak hasil
  console.log("Output:", result);
  