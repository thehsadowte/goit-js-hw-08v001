import throttle from 'lodash/throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};

formEl.addEventListener('input', throttle(onInput, 1000));
formEl.addEventListener('submit', onFormSubmit);

function onInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saveData) {
    formEl.email.value = saveData.email;
    formEl.message.value = saveData.message;
  }
}

populateTextarea();
