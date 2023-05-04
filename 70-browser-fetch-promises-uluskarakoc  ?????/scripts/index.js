const modal = document.getElementById('myModal');

//show modal after 5 seconds
function showModal() {
  return new Promise(function (resolve) {
    window.setTimeout(function () {
      resolve(modal);
    }, 1000 * 5);
  });
}

async function getModal() {
  let result = await showModal();
  result.style.display = 'block';
}

getModal();

//close modal
modal.addEventListener('click', (e) => {
  switch (e.target.className) {
    case 'close':
    case 'modal':
      modal.style.display = 'none';
      break;
  }
});

// animation end
const continueButton = document.getElementById('continue');

continueButton.addEventListener('mouseover', () => {
  onAnimationComplete();
});

async function onAnimationComplete() {
  const buttonAnimationEnd = await onAnimationStart(continueButton);
  buttonAnimationEnd.classList.add('btn-info');
  alert('Continue to subscription!');
}

function onAnimationStart(elem) {
  return new Promise((resolve) => {
    elem.addEventListener('animationend', () => {
      resolve(elem);
    });
  });
}
