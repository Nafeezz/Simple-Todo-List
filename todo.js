function addTodoCard(todoname){
    const todoCardHtml=
    `<div class="added-todo">
      ${todoname}
    <div/>
    `
    const todoContainerElement=document.querySelector(".todo-list-container")
    const currentTodoHtml=todoContainerElement.innerHTML
    todoContainerElement.innerHTML=currentTodoHtml+todoCardHtml
}
document.getElementById("todo-button")
.addEventListener("click",function(event){
    event.preventDefault()
    const todonameElement=document.getElementById("todo-name")
    const todoname=todonameElement.value
      addTodoCard(todoname);
      todonameElement.value="";
})