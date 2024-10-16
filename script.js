const taskIn = document.getElementById('taskIn');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskIn.value.trim();

  const li = document.createElement('li');

  const chk = document.createElement('input');
  chk.type = 'checkbox';

  const lbl = document.createElement('span');
  lbl.textContent = taskText;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Del';

  chk.addEventListener('change', () => {
    if (chk.checked) {
      lbl.style.color = 'white';
    } else {
      lbl.style.color = 'black';
    }
  });

  delBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.appendChild(chk);
  li.appendChild(lbl);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskIn.value = '';
});
