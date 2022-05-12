const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

button.addEventListener('click', () => {
  if (input.value.length > 0) {
    const tarefa = document.createElement('li');
    tarefa.className = 'new';
    tarefa.innerText = input.value;
    list.appendChild(tarefa);
    input.value = '';
  } else {
    alert('Você precisa adicionar uma tarefa primeiro');
  }
});

list.addEventListener('click', () => {
  const tarefasPin = document.querySelectorAll('.new');
  if (event.target.className.length === 12 || event.target.className.length === 22) {
    for (keyy of tarefasPin) {
      keyy.classList.remove('selected');
    }
  } else {
    for (keyy of tarefasPin) {
      keyy.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
});

list.addEventListener('dblclick', () => {
  if (event.target.className.length === 12 || event.target.className.length === 3) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
});

const apagaList = document.getElementById('apaga-tudo');
apagaList.addEventListener('click', () => {
  const apagaTarefa = document.querySelectorAll('.new');
  for (key of apagaTarefa) {
    key.parentNode.removeChild(key);
  }
  localStorage.clear();
});
const completeList = document.querySelector('#lista-tarefas');

const apagaFin = document.getElementById('remover-finalizados');
apagaFin.addEventListener('click', () => {
  const finaliTaref = document.querySelectorAll('.completed');
  for (chav of finaliTaref) {
    chav.parentNode.removeChild(chav);
  }
  localStorage.clear();
  localStorage.setItem('list', completeList.innerHTML);
});

const save = document.getElementById('salvar-tarefas');
save.addEventListener('click', () => {
  localStorage.setItem('list', completeList.innerHTML);
});

const apagaSele = document.getElementById('remover-selecionado');
apagaSele.addEventListener('click', () => {
  const sele = document.querySelector('.selected');
  sele.parentNode.removeChild(sele);
});

window.onload = () => {
  completeList.innerHTML = localStorage.getItem('list');
};
