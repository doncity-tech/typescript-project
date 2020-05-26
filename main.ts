const sendInput = document.querySelector('input');
const sendBtn = document.querySelector('button')! as HTMLInputElement;

sendBtn.addEventListener('click', e => {
  let num = 46;
  console.log(+sendInput.value + num);
  e.preventDefault();
});