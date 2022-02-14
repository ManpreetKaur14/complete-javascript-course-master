'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclose = document.querySelector('.close-modal');
const btnopen = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnopen[i].addEventListener('click', openModal);

btnclose.addEventListener('click', closeModal);
overlay.addEventListener('.click', closeModal);
