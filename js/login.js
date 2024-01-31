import {INPUTEMPTY, INPUTINVAILED, INPUTCORRECT} from '/js/variable.js';

export const viewWarningText = (target, message) => {
  const inputBox = target.parentNode.querySelector('input');
  target.textContent = message;
  target.style.visibility = 'visible';
  inputBox.classList.add('warning-input');
};

export const hiddenWarningText = target => {
  const inputBox = target.parentNode.querySelector('input');
  target.style.visibility = 'hidden';
  inputBox.classList.remove('warning-input');
};

export const checkEmail = value => {
  const regex = new RegExp('[a-zA-Z0-9]+@[a-z]+.[a-z]{2,3}');
  if (value === null || value === '') return INPUTEMPTY;
  if (!regex.test(value)) return INPUTINVAILED;
  return INPUTCORRECT;
};

export const checkPassword = value => {
  if (value === null || value === '') return INPUTEMPTY;
  return INPUTCORRECT;
};

export const visiblePassword = target => {
  const el = target.parentNode.querySelector('input');
  const viewPassword = JSON.parse(el.getAttribute('visible'));
  if (viewPassword) {
    el.setAttribute('visible', 'false');
    target.src = '/images/eye-off.png';
    el.type = 'password';
  } else {
    el.setAttribute('visible', 'true');
    target.src = '/images/eye-on.png';
    el.type = 'text';
  }
};

export const InputFocusEvent = (target, focusIn, focusOut) => {
  target.addEventListener('focusin', focusIn);
  target.addEventListener('focusout', focusOut);
};
