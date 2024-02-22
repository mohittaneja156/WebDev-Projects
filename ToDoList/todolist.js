const todo1=[];
function addTodo(){
    todo1.push(document.querySelector('.todo1').value);
    console.log(todo1);
    document.querySelector('.todo1').value='';
}

const todo2=[];
function showTodo(){
    todo2.push(document.querySelector('.todo2').value);
    document.querySelector('.todo2').value='';
    let todoListHtml='';
    for(let i=0; i<todo2.length;i++){
        const html=`<p>${todo2[i]}</p>`;
        todoListHtml+=html;

    }
    document.querySelector('.display').innerHTML=todoListHtml;
}

const todoFinal=[];

function displayTodoList(){
    
    let finalListHtml='';
    todoFinal.forEach((todoObj,index)=>{
        const {task,date}=todoObj;
        const code=`
            <div>${task}</div>
            <div>${date}</div>
            <button class='delete' onclick="todoFinal.splice(${index},1);displayTodoList();">
                Delete
            </button>`;
        finalListHtml+=code; 
    })




    // for(let i=0; i<todoFinal.length;i++){
    //     const t=todoFinal[i].task;
    //     const d=todoFinal[i].date;
    //     const code=`
    //         <div>${t}</div>
    //         <div>${d}</div>
    //         <button class='delete' onclick="todoFinal.splice(${i},1);displayTodoList();">
    //             Delete
    //         </button>`;
    //     finalListHtml+=code;
    // }
    document.querySelector('.display-final').innerHTML=finalListHtml;  
}
function addTodo() {
    const task=document.querySelector('.task-js').value;
    const date=document.querySelector('.date-js').value;
    const a={task,date};

    todoFinal.push(a);
    displayTodoList();
    document.querySelector('.task-js').value='';  
    document.querySelector('.date-js').value='';  
}


