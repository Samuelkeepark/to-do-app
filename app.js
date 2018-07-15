function onReady () {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener ('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = 'checkbox';

    // set the title
    newLi.textContent = title;

    // set button text
    deleteButton.textContent = 'Delete';

    // newLi style
    newLi.classList.add("mdl-list__item-primary-content");

    // checkbox style
    checkbox.classList.add("check");

    // deleteButton
    deleteButton.classList.add("mdl-button", "mdl-js-button". "mdl-button--raised");

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach deletebutton to li
    newLi.appendChild(deletebutton)

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

    // create delete button
    let deletebutton = document.createElement('button');

    // set button text
    deleteButton.textContent = 'Delete';

    deleteButton.onclick = function() {
      toDoList.removeChild(newLi);
    }
    });

    // attach delete button to newLi
    newLi.appendChild(deleteButton);
  };

window.onload = function() {
  onReady();
};
