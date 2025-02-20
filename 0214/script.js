const wrapper = document.querySelector('#wrapper');
const question = document.querySelector('#question');
const yesbutton = document.querySelector('#yesbutton');
const nobutton = document.querySelector('#nobutton');

const wrapperRect = wrapper.getBoundingClientRect();
const nobuttonRect = nobutton.getBoundingClientRect();

yesbutton.addEventListener('click', () => {
    question.innerHTML = 'I LOVE YOU :3';
});

nobutton.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * 
    (wrapperRect.width - nobuttonRect.width)) + 1;
    const j = Math.floor(Math.random() * 
    (wrapperRect.height - nobuttonRect.height)) + 1;
    nobutton.style.left = i + 'px';
    nobutton.style.top = j + 'px';
});
