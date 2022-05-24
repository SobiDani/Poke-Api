const myInput$$ = document.querySelector('input');
const myButton$$ = document.querySelector('button');
const myUl$$ = document.querySelector('ul');

const create = () => {
  const li$$ = document.createElement('li');
  const button1$$ = document.createElement('button');
  const p1$$ = document.createElement('p');

  p1$$.innerText = myInput$$.value;

  li$$.appendChild(p1$$);
  li$$.appendChild(button1$$);
  myUl$$.appendChild(li$$);

  button1$$.classList.add('deleteButton')
  button1$$.textContent = '-'


  const borrar = (event) => {
    event.remove();
  };
  button1$$.addEventListener('click', () => borrar(li$$));
};

myButton$$.addEventListener('click', create);

