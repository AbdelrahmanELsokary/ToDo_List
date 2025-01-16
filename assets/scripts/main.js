let text = localStorage.getItem('tasks') ;
let input = document.getElementById('text');
let btn = document.getElementById('add');
let ol = document.getElementById('order_task');

btn.onclick = () => {
  if (input.value === '') {
    return;
  }
  text += `
  <li>${input.value}</li>
  `;
  ol.innerHTML = text;
  localStorage.setItem('tasks', text);
  input.value = '';
};

them = document.getElementById('them');
them.onclick = () => {
  if (document.getElementById('dark').classList.contains('dark-mode')) {
    document.getElementById('dark').classList.remove('dark-mode');
  } else {
    document.getElementById('dark').classList.add('dark-mode');
  }
};
