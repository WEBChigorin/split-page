// I just need to create a couple :hover classes

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// Ok, now I need to add some event lisrteners

left.addEventListener('mouseenter', () => {
  container.classlist.add('hover-left'); // that the class I wanna add
});
left.addEventListener('mouseleave', () => {
  container.classlist.remove('hover-left'); // don't forget to remove class after mouse goes away
});

right.addEventListener('mouseenter', () => {
  container.classlist.add('hover-right');
});
right.addEventListener('mouseleave', () => {
  container.classlist.remove('hover-right');
});
