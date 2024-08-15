
let todoList=[
//     {
//     item:'buy milk',
//      dueDate:'4/4/24'
//     },
//     {
//         item:'buy clothes', 
//         dueDate:'5/7/23'
//     }

];
displayItem();
function addTodo(){
    let inputElement=document.querySelector('#Todo_input');
    let DatetElement=document.querySelector('#todo_date');
    let todoItem= inputElement.value;
    let todoDate=DatetElement.value;
    todoList.push({item: todoItem , dueDate:todoDate});

    inputElement.value=' ';
    DatetElement.value=' ';
    displayItem();
}

function displayItem(){
    let containerElement= document.querySelector('.todo_container');
let newHTML=' ';
  
    for(let i=0;i<todoList.length; i++){
        // let item=todoList[i].item;
        // let dueDate=todoList[i].dueDate;
        let{item ,dueDate}= todoList[i];
        newHTML+=`
        
        <span>${item}</span>
        <span>${dueDate}</span>
         <button class='btn_delete' onclick="todoList.splice(${i},1);  displayItem();">Delete</button>
       
         `;

   }
   containerElement.innerHTML=newHTML;
 
}