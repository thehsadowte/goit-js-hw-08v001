import throttle from 'lodash/throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const { email, message } = formEl.elements;

formEl.addEventListener('input', throttle(onInput, 1000));
formEl.addEventListener('submit', onFormSubmit);

function onInput(event) {
  // formData[event.target.name] = event.target.value;
  formData.email = email.value;
  formData.message = message.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saveData) {
    email.value = saveData.email || '';
    message.value = saveData.message || '';
  }
}

populateTextarea();
