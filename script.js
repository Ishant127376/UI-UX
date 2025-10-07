let addtask = document.getElementById("addbtn");
let form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTaskHandler();
});

addtask.addEventListener('click', addTaskHandler);

function addTaskHandler() {
    let divv = document.getElementById("newdiv");
    

    let taskTitle = document.getElementById("title").value.trim();
    let taskDescription = document.getElementById("dis").value.trim();


    if (taskTitle === "") {
        alert("Please enter a task title!");
        return; 
    }
    

    let taskContainer = document.createElement('div');
    taskContainer.className = 'task-item';
    

    let taskContent = document.createElement('span');
    taskContent.className = 'task-text';
    taskContent.innerHTML = `<strong>${taskTitle}:</strong> ${taskDescription}`;
    

    let completeBtn = document.createElement('button');
    completeBtn.textContent = 'Mark as Completed';
    completeBtn.className = 'complete-btn';
    
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';




    completeBtn.addEventListener('click', () => {
  
        taskContent.classList.toggle('completed');
        

        completeBtn.textContent = taskContent.classList.contains('completed') ? 
                                 'Mark as Incomplete' : 'Mark as Completed';
    });
    

    deleteBtn.addEventListener('click', () => {

        taskContainer.remove(); 
    });


    editBtn.addEventListener('click', () => {
        if (editBtn.textContent === 'Edit') {
    
            editBtn.textContent = 'Save';

            let titleInput = document.createElement('input');
            titleInput.type = 'text';
           
            titleInput.value = taskTitle; 
            titleInput.className = 'edit-input-title';
            titleInput.style.marginRight = '5px'; 

            let descriptionInput = document.createElement('input');
            descriptionInput.type = 'text';
            descriptionInput.value = taskDescription;
            descriptionInput.className = 'edit-input-description';
            descriptionInput.style.marginRight = '10px'; 


            taskContainer.replaceChild(titleInput, taskContent); 
            taskContainer.insertBefore(descriptionInput, titleInput.nextSibling); 

        } else {
   
            editBtn.textContent = 'Edit';
            

            let titleInput = taskContainer.querySelector('.edit-input-title');
            let descriptionInput = taskContainer.querySelector('.edit-input-description');

 
            taskTitle = titleInput.value.trim();
            taskDescription = descriptionInput.value.trim();

            if (taskTitle === "") {
                alert("Task title cannot be empty!");
        
                editBtn.textContent = 'Save'; 
                return;
            }

            taskContent.innerHTML = `<strong>${taskTitle}:</strong> ${taskDescription}`;

     
            taskContainer.replaceChild(taskContent, titleInput);
            descriptionInput.remove(); 
        }
    });

    taskContainer.appendChild(taskContent);
    taskContainer.appendChild(completeBtn);
    taskContainer.appendChild(editBtn);
    taskContainer.appendChild(deleteBtn);

    divv.appendChild(taskContainer);


    document.getElementById("title").value = '';
    document.getElementById("dis").value = '';
}
