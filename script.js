const cover = document.getElementById('cover');
const wishes = document.getElementById('wishes');
const photo = document.getElementById('photo');
const love = document.getElementById('love');

function openCard() {
  cover.style.display = 'none';
  wishes.style.display = 'flex';
}

function showPhoto() {
  wishes.style.display = 'none';
  photo.style.display = 'flex';
}

function showLoveMessage() {
  photo.style.display = 'none';
  love.style.display = 'flex';
}

function resetCard() {
  love.style.display = 'none';
  cover.style.display = 'flex';
}
