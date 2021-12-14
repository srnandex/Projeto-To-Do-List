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
        if(event.target.className.length === 12 || event.target.className.length === 22){
        for(keyy of tarefasPin){
            keyy.classList.remove('selected');
        }}
        else{
        for(keyy of tarefasPin){
            keyy.classList.remove('selected');
        }
        event.target.classList.add("selected");
    }
    })
    
    
    
    list.addEventListener('dblclick', function(){
        if(event.target.className.length === 12 || event.target.className.length === 3){
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

    let apagaFin = document.getElementById('remover-finalizados');
    apagaFin.addEventListener('click', function(){
        let finaliTaref = document.querySelectorAll('.completed');
        for(chav of finaliTaref){
            chav.parentNode.removeChild(chav)
        }
    })


























}























