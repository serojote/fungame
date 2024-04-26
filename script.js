document.addEventListener('DOMContentLoaded', () => {
  const clickBtn = document.getElementById('clickBtn');
  const scoreDisplay = document.getElementById('score');
  let score = 0;

  clickBtn.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
  });
});
