
const mainTitle = document.getElementById('title');
const descriptionPara = document.querySelector('.description');
const updateButton = document.getElementById('update-btn');
updateButton.addEventListener('click', () => {
  mainTitle.textContent = 'DOM Tree Updated!';
  descriptionPara.textContent = 'The paragraph text has been modified in real-time.';
  mainTitle.style.color = '#00796b';
  descriptionPara.classList.add('active');
});