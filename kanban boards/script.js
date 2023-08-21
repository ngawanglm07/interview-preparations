const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');

tasks.forEach(task => {
  task.addEventListener('dragstart', dragStart);
  task.addEventListener('dragend', dragEnd);
});

columns.forEach(column => {
  column.addEventListener('dragover', dragOver);
  column.addEventListener('dragenter', dragEnter);
  column.addEventListener('dragleave', dragLeave);
  column.addEventListener('drop', drop);
});

let draggedTask = null;

function dragStart(event) {
  draggedTask = event.target;
  event.target.classList.add('dragging');
}

function dragEnd(event) {
  event.target.classList.remove('dragging');
  draggedTask = null;
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  event.target.classList.add('hovered');
}

function dragLeave(event) {
  event.target.classList.remove('hovered');
}

function drop(event) {
  event.preventDefault();
  event.target.classList.remove('hovered');
  
  if (draggedTask) {
    event.target.appendChild(draggedTask);
  }
}
