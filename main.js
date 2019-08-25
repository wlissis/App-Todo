var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = ''; //remove conteudo da 'ul' Lista 

    for( todo of todos){
        var todoElement = document.createElement('li')//cria Elemento da lista
        var textTodo = document.createTextNode(todo)//cria Texto do Elemento

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href','#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'delTodo('+ pos +')');

        var linkText = document.createTextNode(' - Excluir')
        linkElement.appendChild(linkText);

        todoElement.appendChild(textTodo);//adiciona texto como filho do ,
        todoElement.appendChild(linkElement);//adiciona "Excluir" ao lado do todo

        listElement.appendChild(todoElement);//adicona o todo elemento como filho da Lista
        
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);//push => adc item no fim do array
    inputElement.value = '';
    renderTodos()
    saveToStorage();
}

buttonElement.onclick = addTodo;

function delTodo(pos){
    todos.splice(pos, 1);//apartir da posição, remove prox item
    renderTodos();
saveToStorage();
}
 //ultilizando armazenamento local(local storage);


function saveToStorage(){
    //JASON -> tem formato parecido com de um objeto em JS , MAS É UMA STRING
    localStorage.setItem('list_todos', JSON.stringify(todos)); // localStorage()->so grava chave e valor em formato 'STRING'

}





