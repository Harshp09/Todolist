let tasks = [];
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskName = taskInput.value;

  console.log(taskName);

  if(taskName.trim() !== ''){
    const task = {
      id : Date.now(),
      name : taskName,
      completed : false
    };

    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
}
const taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask()
    }
});
function deleteTask(id){
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}
function markCompeleted(id){
  tasks = tasks.map(task => {
    if(task.id === id){
      task.completed = !task.completed;
    }
    return task;
  });
  renderTasks();
  updateCompleteTask(id);


}
function updateCompleteTask(id){
  const taskElement = document.getElementById(id);
  if(taskElement){
    const task = tasks.find(task => task.id === id);
    if(task.completed){
      taskElement.classList.add('completed');
    }else{
      taskElement.classList.remove('completed');
    }
  }
}
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', task.id);
    const taskName = document.createElement('span');
    taskName.innerHTML = task.name;
    const completeButton = document.createElement('i');
    completeButton.classList.add('bx','bx-check','compelete-btn');
    completeButton.addEventListener('click' , () => markCompeleted(task.id))
    const deleteButton = document.createElement('i');
    deleteButton.classList.add('bx','bxs-trash','delete-btn');
    deleteButton.addEventListener('click' , () => deleteTask(task.id))
    listItem.appendChild(taskName);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

  });
}
renderTasks()