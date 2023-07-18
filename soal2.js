const readline = require('readline');

function calculateRankings(scores, gitsScores) {
  const scoresSet = [...new Set(scores)].sort((a, b) => b - a); // Menghapus elemen duplikat dan mengurutkan skor secara menurun
  const rankings = {};

  scoresSet.forEach((score, index) => {
    rankings[score] = index + 1; // Memberikan peringkat ke setiap skor
  });

  const gitsRankings = [];
  gitsScores.forEach((gitsScore) => {
    let rank = 1;
    for (let score of scoresSet) {
      if (gitsScore < score) {
        rank = rankings[score] + 1; // Mengubah peringkat jika skor GITS lebih rendah dari skor saat ini
        break;
      }
    }
    gitsRankings.push(rank);
  });

  return gitsRankings;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan jumlah pemain: ', (numPlayers) => {
  rl.question('Masukkan skor pemain (dipisahkan dengan spasi): ', (scoresInput) => {
    const scores = scoresInput.split(" ").map(Number);
    rl.question('Masukkan jumlah permainan GITS: ', (numGames) => {
      rl.question('Masukkan skor GITS (dipisahkan dengan spasi): ', (gitsScoresInput) => {
        const gitsScores = gitsScoresInput.split(" ").map(Number);
        rl.close();

        const result = calculateRankings(scores, gitsScores);
        console.log("Output:", result.join(" "));
      });
    });
  });
});
