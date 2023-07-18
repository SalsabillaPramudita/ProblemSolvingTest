function calculateRankings(scores, gitsScores) {
    const sortedScores = scores.sort((a, b) => b - a); // Mengurutkan skor dari terbesar ke terkecil
    const rankings = {};
  
    let rank = 1;
    for (let i = 0; i < sortedScores.length; i++) {
      const score = sortedScores[i];
      if (rankings[score] === undefined) {
        rankings[score] = rank; // Memberikan peringkat ke skor yang unik
      }
      if (sortedScores[i] !== sortedScores[i + 1]) {
        rank++; // Meningkatkan peringkat jika skor berbeda
      }
    }
  
    const gitsRankings = [];
    for (let i = 0; i < gitsScores.length; i++) {
      const gitsScore = gitsScores[i];
      let gitsRank = 1;
      for (let j = 0; j < sortedScores.length; j++) {
        if (gitsScore < sortedScores[j]) {
          gitsRank = rankings[sortedScores[j]] + 1; // Mengubah peringkat jika skor GITS lebih rendah
          break;
        }
      }
      gitsRankings.push(gitsRank);
    }
  
    return gitsRankings;
  }
  
  // Menerima input dari pengguna
  const numPlayers = parseInt(prompt("Masukkan jumlah pemain:"));
  const scores = prompt("Masukkan skor pemain (dipisahkan dengan spasi):").split(" ").map(Number);
  const numGames = parseInt(prompt("Masukkan jumlah permainan GITS:"));
  const gitsScores = prompt("Masukkan skor GITS (dipisahkan dengan spasi):").split(" ").map(Number);
  
  // Memanggil fungsi untuk menghitung peringkat GITS
  const result = calculateRankings(scores, gitsScores);
  
  // Mencetak peringkat GITS
  console.log("Output:", result.join(" "));
  