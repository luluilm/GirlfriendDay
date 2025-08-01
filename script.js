const grid = document.getElementById('gameGrid');
const message = document.getElementById('message');
const nextBtn = document.getElementById('nextBtn');

const totalCells = 9;
const adekImage = 'adek.png';
const adekCount = 3;
let found = 0;

// Buat posisi acak untuk adek
const adekPositions = [];
while (adekPositions.length < adekCount) {
  const rand = Math.floor(Math.random() * totalCells);
  if (!adekPositions.includes(rand)) adekPositions.push(rand);
}

for (let i = 0; i < totalCells; i++) {
  const cell = document.createElement('div');
  cell.addEventListener('click', () => {
    if (cell.classList.contains('found') || cell.classList.contains('wrong')) return;

    if (adekPositions.includes(i)) {
      const img = document.createElement('img');
      img.src = adekImage;
      cell.appendChild(img);
      cell.classList.add('found');
      found++;
      if (found === adekCount) {
        message.innerText = 'Yayy adek sudah ketemu!!';
        nextBtn.style.display = 'inline-block';
      }
    } else {
      cell.classList.add('wrong');
      message.innerText = 'Yahh masi salah :((';
    }
  });
  grid.appendChild(cell);
}
