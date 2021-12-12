window.onload = function () {


    let input = document.getElementById('texto-tarefa');
    let button = document.getElementById('criar-tarefa');
    let list = document.getElementById('lista-tarefas');
    
    button.addEventListener('click', function(){
        if(input.value.length > 0){
        let tarefa = document.createElement('li');
        tarefa.className = 'new'
        tarefa.innerText = input.value;
        list.appendChild(tarefa)
        input.value = ''}
        else{
            alert('Você precisa adicionar uma tarefa primeiro');
        }
    })

    list.addEventListener('click', function(){
        console.log(event.target);
        event.target.style.backgrondColor = 'rgb(228, 128, 128)'
    })

    let apagaList = document.getElementById('apaga-tudo');

    apagaList.addEventListener('click', function(){
        let apagaTarefa = document.querySelectorAll('.new');
        for(key of apagaTarefa){
            key.parentNode.removeChild(key);
        }
    })




























}























