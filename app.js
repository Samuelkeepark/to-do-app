function onReady() {
  // 1. declare variable
  let id=0;

  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  // declare deleteButton
  let deleteButton='';

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');

    // 3 increment id
        let id=1;
        id++;
        ++id;

    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,

      // 2 add id property
      id: id.value

    });

    newToDoText.value = '';

    renderTheUI();

    //test
    console.log(toDos.id);

  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      // 4 delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";

      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      // 4 append delete button on newLi
      newLi.appendChild(deleteButton);

    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  // 4/5 event listener for deleteButton and remove id
  deleteButton.addEventListener('click', function () {
    if (toDo.id === id) {
      toDoList.removeChild(newLi);
    }
    // 6 update the UI
    renderTheUI();
  });

  renderTheUI();
 }

 window.onload = function() {
   onReady();
};
