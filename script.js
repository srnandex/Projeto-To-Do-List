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
        let tarefasPin = document.querySelectorAll('.new');
        for(keyy of tarefasPin){
            keyy.classList.remove('selected');
        }
        event.target.classList.add("selected");
        
    })
    
    
    
    list.addEventListener('dblclick', function(){
        console.log(event.target.className.length);
        if(event.target.className.length === 12){
            event.target.classList.add("completed");
        }
        else{
        event.target.classList.remove('completed');
        }
    })








    let apagaList = document.getElementById('apaga-tudo');

    apagaList.addEventListener('click', function(){
        let apagaTarefa = document.querySelectorAll('.new');
        for(key of apagaTarefa){
            key.parentNode.removeChild(key);
        }
    })




























}























