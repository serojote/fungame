document.addEventListener('DOMContentLoaded', () => {
  const clickBtn = document.getElementById('clickBtn');
  let score = 0;

  clickBtn.textContent = score;

  clickBtn.addEventListener('click', () => {
    score++;
    clickBtn.textContent = score;
  });
});
