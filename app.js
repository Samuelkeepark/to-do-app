function onReady() {
<<<<<<< HEAD
=======
  const toDos=[];
>>>>>>> dom-two
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

<<<<<<< HEAD
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;
=======
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return;}
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';
>>>>>>> dom-two

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

<<<<<<< HEAD
    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';
=======
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }
>>>>>>> dom-two

  });
}

<<<<<<< HEAD
=======
  renderTheUI();
}
>>>>>>> dom-two

window.onload = function() {
  onReady();
};
