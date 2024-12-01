

const imgWrapper = document.querySelector('.video');
const img = imgWrapper.querySelector('.video__image');
const button = imgWrapper.querySelector('.video__button');

function createFrame() {
  const frame = document.createElement('iframe');
  frame.src = 'https://www.youtube.com/embed/9TZXsZItgdw?si=JzBm8_KsnjTPfFs1';
  frame.className = 'video__play';
  frame.setAttribute('allow', 'autoplay');
  imgWrapper.appendChild(frame);
}

function playVideo() {
  button.addEventListener ('click', () =>{
    img.remove();
    createFrame();
    button.style.display = 'none';
  });
}


export {playVideo};
