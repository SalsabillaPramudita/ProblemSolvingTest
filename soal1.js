function generateSequence(n) {
    const sequence = [1]; // Memulai deret dengan elemen pertama 1
    
    for (let i = 2; i <= n; i++) {
      // Menghitung elemen berikutnya berdasarkan rumus A000124
      const nextElement = sequence[i - 2] + i - 1;
      sequence.push(nextElement);
    }
    
    return sequence;
  }
  
  // Menerima input dari pengguna
  const n = parseInt(prompt("Masukkan jumlah elemen dalam deret:"));
  
  // Memanggil fungsi untuk menghasilkan deret sesuai input
  const result = generateSequence(n);
  
  // Mencetak deret hasilnya
  const output = result.join("-");
  console.log("Output:", output);
  