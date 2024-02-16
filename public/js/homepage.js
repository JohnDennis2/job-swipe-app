// const frontSwipeCardEl = document.querySelector('.front-card');
const swipeCardEl = document.querySelectorAll('.swipe-card');

const saveJobBtnEl = document.querySelector('#save-job-btn');
const denyJobBtnEl = document.querySelector('#deny-job-btn');
// keep track of the card in front
let frontCardIndex = 0;
// front card animate it to the side
// rest of the cards pull them down by whatever margin and change z-index

const saveJobHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  saveJob(swipeCardEl[frontCardIndex]);
  frontCardIndex++;
  updateCards();
  console.log(frontCardIndex);
};

const denyJobHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  denyJob(swipeCardEl[frontCardIndex]);
  frontCardIndex++;
  updateCards();
  console.log(frontCardIndex);
};

function setJobCard(cardEl, cardPos, cardDepth, cardDelay) {
  anime({
    targets: cardEl,
    bottom: `${1.5*cardPos}rem`,
    easing: 'easeInOutExpo',
    keyframes: [
      {opacity: 0, 'z-index': `-${cardDepth}`,},
      {opacity: 100, 'z-index': `-${cardDepth}`,},
    ],
    
    delay: cardDelay,

    loop: false,
  })
}

function pullJobDown(cardEl, cardPos, cardDepth) {
  anime({
    targets: cardEl,
    bottom: `${1.5*cardPos}rem`,
    'z-index': `-${cardDepth}`,
    easing: 'easeInOutExpo',

    loop: false,
  })
}

function updateCards() {

  if (frontCardIndex + 3 < swipeCardEl.length) {
    const upperLimit = frontCardIndex + 3;
    setJobCard(swipeCardEl[upperLimit], 3, upperLimit, 300);
    
    for (let i = upperLimit - 1; i >= frontCardIndex; i--) {
      pullJobDown(swipeCardEl[i], i-frontCardIndex, i);
    }
  } else {
    const upperLimit = swipeCardEl.length - 1;

    for (let i = upperLimit; i >= frontCardIndex; i--) {
      pullJobDown(swipeCardEl[i], i-frontCardIndex, i)
    }
  }
}

// animates and removes job from card queue
async function denyJob(cardEl) {
  anime({
    targets: cardEl,
    translateX: '-20rem',
    easing: 'easeInOutExpo',
    opacity: '0',
    background: 'rgb(255,0,0)',

    loop: false,
  })

  // remove card from 
};

// animates and saves a job to our 'favorite' table
async function saveJob(cardEl) {
  anime({
    targets: cardEl,
    translateX: '20rem',
    easing: 'easeInOutExpo',
    opacity: '0',
    background: 'rgb(0,255,0)',
    
    loop: false,
  })

  // save job info to favorite table

  // remove card from queue
};

async function init() {
  try {
    const response = await fetch('/api/job', {
      method: 'GET',
    });
    console.log(response);
  } catch(err) {
    console.error(err);

  }

  // if (response.ok) {
  //   console.log('successful pull of data');
  // } else {
  // }
  

  let jobPosition = 0;

  // setup and animate card for each jobEl
  if (frontCardIndex + 3 <= swipeCardEl.length) {
    for (let i = 3 + frontCardIndex; i >= 0 + frontCardIndex; i--) {
      setJobCard(swipeCardEl[i], i, i, i*300)
    }
  } else {
    for (let i = swipeCardEl.length - 1; i > frontCardIndex + 1; i--) {
      setJobCard(swipeCardEl[i], i, i, i*300)
    }
  }
}

init();
console.log(swipeCardEl);

saveJobBtnEl.addEventListener('click', saveJobHandler);
denyJobBtnEl.addEventListener('click', denyJobHandler);
// saveJob(frontSwipeCardEl)