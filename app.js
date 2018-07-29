function onReady() {

    // 1: declare ID
	  let id = 0;
	  let toDos = [];
	  const addToDoForm = document.getElementById('addToDoForm');

    function createNewToDo() {
	   const newToDoText = document.getElementById('newToDoText');
	   if (!newToDoText.value) { return; }


	   toDos.push({
	    title: newToDoText.value,
	    complete: false,
      // 2. add id property
	    id: id
	   });

     // 3. increment the variable
	   ++id;
	   newToDoText.value = '';
	   renderTheUI();
	   }

	   function renderTheUI() {
	    const toDoList = document.getElementById('toDoList');
	    toDoList.textContent = '';
	    toDos.forEach(function(toDo) {
	      const newLi = document.createElement('li');
	      const checkbox = document.createElement('input');
	      checkbox.type = "checkbox";
        // 4. create delete button, apprend to newLI, and register event listener
	      const deleteButton = document.createElement('button');
	      deleteButton.textContent = "delete";
	      deleteButton.classList.add("mdl-button", "mdl-js-button", "mdl-button--fab");
        // 5. remove to-do from list
	      deleteButton.addEventListener('click', event => {
	        toDos = toDos.filter(function(item){
	          return item.id !== toDo.id;
	        })

        // 6. render
	      renderTheUI();
	    });

	      newLi.textContent = toDo.title;

	      toDoList.appendChild(newLi);
	      newLi.appendChild(checkbox);
	      newLi.appendChild(deleteButton);
	    });
	   }

	  addToDoForm.addEventListener('submit', event => {
	    event.preventDefault();
	    createNewToDo();
	   });
	   renderTheUI();
	}


	window.onload = function() {
	  onReady();
	};
