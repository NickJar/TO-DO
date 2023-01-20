import './style.css';



let header = document.getElementById('header');
let popupForm = document.getElementById('popupForm');
let createTask = document.createElement('button');
createTask.textContent = "Create Task";
createTask.addEventListener("click", function(){
    popupForm.style.display = '';
})
header.appendChild(createTask);

let closeBTN = document.getElementById('close');
closeBTN.addEventListener("click", function(){
    popupForm.style.display = "none";
    document.getElementById('form').reset();
})



let mainContent = document.getElementById('main');
let submitBTN = document.getElementById('submit');
submitBTN.addEventListener("click", generateTask);

//task constructor
function tasks(title, description, date, priority){
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
}

function getPriorityColor(priority){
    if(priority == "Low"){
        return "low"
    }
    else if(priority == "Medium"){
        return "medium";
    }
    else{
        return "high";
    }
}

function generateTask(){
    popupForm.style.display = "none";

    let priority = radioValue();
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    const ntask = new tasks(title, description, date, priority)

    let color = getPriorityColor(priority);
    let task = document.createElement('div');
    task.classList.add("task");
    task.classList.add(color);

    // localStorage.setItem('sent', JSON.stringify(ntask));
    // localStorage.getItem('sent')

    let complete = document.createElement('img');
    complete.src = '../unchecked.svg';
    complete.style.maxWidth = '1.5em';
    console.log(complete.src);
    complete.classList.add('unchecked');
    console.log(complete.classList.value);
    complete.addEventListener('click', function(){
        if(complete.classList.value == 'unchecked'){
            complete.src = '../checked.svg'
            task.style.textDecoration = "line-through";
            task.style.opacity = "0.7";
            complete.classList.remove('unchecked');
            complete.classList.add('checked');
           
        }
        else if(complete.classList.value == 'checked'){
            complete.src = '../unchecked.svg'
            task.style.textDecoration = "";
            task.style.opacity = "1";
            complete.classList.remove('checked')
            complete.classList.add('unchecked');
        }
    })

    let taskTitle = document.createElement('div')
    taskTitle.innerHTML = ntask.title;

    let taskDescription = document.createElement('div')
    taskDescription.innerHTML = ntask.description;

    let taskDate = document.createElement('div')
    taskDate.innerHTML = ntask.date;
    console.log(ntask.date);

    let trash = document.createElement('div');
    let deleteTask = document.createElement('img');
    deleteTask.src = "../trash.svg";
    deleteTask.addEventListener('click', function(){
        var row = deleteTask.parentNode.parentNode;
        row.parentNode.removeChild(row);
    })
    deleteTask.style.maxWidth = "1.5em";

    mainContent.prepend(task);
    task.appendChild(complete);
    task.appendChild(taskTitle);
    task.appendChild(taskDescription);
    task.appendChild(taskDate);
    trash.appendChild(deleteTask);
    task.appendChild(trash);

    // localStorage.setItem('taskTitle', task.innerHTML);
    // localStorage.setItem('taskDescription', taskDescription.innerHTML);
    // localStorage.setItem('taskDate', taskDate.innerHTML);

    document.getElementById('form').reset();
}

function radioValue(){
    var radios = document.getElementsByName('priority');

  for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    // do whatever you want with the checked radio
    return radios[i].value;

   
  }
}



}



function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


// localStorage.getItem('taskTitle');
// localStorage.getItem('taskDescription');
// localStorage.getItem('taskDate');
