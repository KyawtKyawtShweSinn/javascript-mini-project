//UI
const formel=document.getElementById('form');
const inputel=document.getElementById('input');
const todoul = document.getElementById('todos');

//Get object from local storage
const todos = JSON.parse(localStorage.getItem('todos'));
//console.log(todos);
//console.log(typeof todos);

//Remove nodelist array 
if(todos){
    todos.forEach(todo => addtodo(todo));
}

formel.addEventListener('submit',(e)=>{
    // console.log('hay');

    e.preventDefault();

    addtodo();
});

function addtodo(todo){
    // console.log('hay');
    let todotext = inputel.value;

    if(todo){
        todotext = todo.text;
    }

    if(todotext){
        //Create Element li
        const li=document.createElement('li');

        //Add complete class to li
        if(todo && todo.complete){
            li.classList.add("completed");
        }

        //Add text to li
        li.appendChild(document.createTextNode(todotext));
        // console.log(li);

        //Add li to todoul
        todoul.appendChild(li);
        inputel.value ='';

        //Update Local Storage
        updatelocalstorage();

        //Add Line Through by left click
        li.addEventListener('click',()=>{
            li.classList.toggle('completed');
            updatelocalstorage();
        });

        //Remove list by right click(contextmenu for right click)
        li.addEventListener('contextmenu',(e)=>{
            console.log('I am working');
            li.remove();
            updatelocalstorage();

            e.preventDefault();
        })

    }else{
        window.alert("Enter your todo!")
    }

}

function updatelocalstorage(){
    //console.log('I am local storage');
    let todolis = document.querySelectorAll('li');
    //console.log(todolis);

    //Create todos array
    let todos = [];

    //remove node array list, only show li innertext
    todolis.forEach((todoli)=>{
    //console.log(todoli);
    //console.log(todoli.innerText);

    //Add object to array 
    todos.push({
            text:todoli.innerText,
            complete:todoli.classList.contains('completed')
        });
    }); 
    //console.log(todos);
    //add object to local storage with stringify method
    localStorage.setItem('todos',JSON.stringify(todos));
}

