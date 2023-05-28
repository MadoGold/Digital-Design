const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.header__menu a, .footer__menu a');
const returnButton = document.querySelector('.return__button');
const dateElements = document.querySelectorAll('.card__date');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupBuy = document.querySelector('.popup__buy');
const cardBuy = document.querySelectorAll('.card__button');
const themeToggleBtn = document.querySelector('.header__button');
const root = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
  root.classList.toggle('light-theme');

  if (root.classList.contains('light-theme')) {
    root.style.setProperty('--color-btn-text', '#1a1a1d');
    root.style.setProperty('--color-bg', '#fff');
    root.style.setProperty('--color-text', '#000000');
    root.style.setProperty('--color-card', '#bd849b');
  } else {
    root.style.setProperty('--color-btn-text', '#fff');
    root.style.setProperty('--color-bg', '#1a1a1d');
    root.style.setProperty('--color-text', '#950740');
    root.style.setProperty('--color-card', '#303036');
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    returnButton.classList.add('show');
  } else {
    returnButton.classList.remove('show');
  }
});

menuLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

returnButton.addEventListener('click', smoothScroll);

function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

function getDayInfo() {
  const date = new Date();
  const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  const day = weekdays[date.getDay()];
  const week = Math.ceil(date.getDate() / 7);
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return day + ', ' + week + ' неделя ' + month + ' ' + year + ' года';
}

function updateDates() {
  dateElements.forEach((el) => {
    el.textContent = getDayInfo();
  });
}

window.addEventListener('load', () => {
  updateDates();
});

popupClose.addEventListener('click', () => {

  popup.classList.remove('show');
  body.classList.remove('fixed');
});

popup.addEventListener('click', (e) => {

  if (e.target.classList.contains('popup')) {
    popup.classList.remove('show');
    body.classList.remove('fixed');
  }
});

cardBuy.forEach(buyBtn => {
  buyBtn.addEventListener('click', () => {

    popup.classList.add('show');
    body.classList.add('fixed');
  });
});

popupBuy.addEventListener('click', () => {
  alert('Покупка совершена успешно')
});
