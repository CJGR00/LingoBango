const answers = document.querySelectorAll('.answer');
const feedback = document.querySelector('.feedback');

answers.forEach((answer) => {
  answer.addEventListener('click', () => {
    answers.forEach((item) => item.classList.remove('selected', 'correct', 'wrong'));
    answer.classList.add('selected');
    if (answer.dataset.correct === 'true') {
      answer.classList.add('correct');
      feedback.textContent = 'Correct. Clear comms, clear advantage.';
    } else {
      answer.classList.add('wrong');
      feedback.textContent = 'Not quite. Read the location in the callout again.';
    }
  });
});

const mapTabs = document.querySelectorAll('.map-tab');
const result = document.querySelector('.generator-result');
const trashTalk = {
  English: 'NICE AIM.<br /><strong>IN YOUR DREAMS.</strong>',
  Chinese: 'NICE AIM.<br /><strong>IN YOUR DREAMS.</strong>',
  Russian: 'GOOD TRY.<br /><strong>NOT.</strong>',
  Japanese: 'THAT WAS<br /><strong>ADORABLE.</strong>',
  Thai: 'KEEP TRYING.<br /><strong>CHAMP.</strong>',
  Vietnamese: 'A LITTLE<br /><strong>TOO SLOW.</strong>',
  Indonesian: 'GOOD ROUND.<br /><strong>FOR US.</strong>',
  Filipino: 'NICE ONE.<br /><strong>ALMOST.</strong>',
};
mapTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    mapTabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    result.textContent = `${tab.querySelector('strong').textContent} selected. Generate a line.`;
  });
});

document.querySelector('.generate-button').addEventListener('click', () => {
  const language = document.querySelector('.map-tab.active strong').textContent;
  result.innerHTML = trashTalk[language];
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navigation.classList.toggle('mobile-open', !open);
});
