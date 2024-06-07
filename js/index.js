function ajouterTache(){

    const task = document.getElementById("tache");

    if(task.value){
        const todoList = document.getElementById("todo")
        const item = document.createElement("li");
        const completedTaches = document.getElementById("completedTaches");
        const completed = document.getElementById("completed");

        item.innerHTML = task.value;

        todoList.appendChild(item);
        $(todoList).listview('refresh');

        const todoContainer = document.getElementById("listTaches");
        task.select();
        todoContainer.hidden = false;

        $(item).on('swipeleft', function (){
            $(this).hide('slow', function (){
                $(this).remove();
                if(todoList.childNodes.length === 1){
                    todoContainer.hidden = true;
                }
                if(completed.childNodes.length === 1){
                    completedTaches.hidden = true;
                }
            });
        })

        $(item).on('swiperight', function (){
            const completed = document.getElementById("completed");
            const completedTaches = document.getElementById("completedTaches");

            $(this).hide('slow', function() {
                $(this).appendTo("#completed").show('slow');

                completedTaches.hidden = false;
                $(completed).listview('refresh');

                if(todoList.childNodes.length === 1){
                    todoContainer.hidden = true;
                }
                if(completed.childNodes.length === 1){
                    completedTaches.hidden = true;
                }
            });
        })
    }
}
function reinitialiser(){

    const todo = document.getElementById("todo");
    todo.innerHTML = '';
    const todoContainer = document.getElementById("listTaches");
    todoContainer.hidden = true;

    const completedTache = document.getElementById("completedTaches");
    completedTache.innerHTML = '';
    const completed = document.getElementById("completed");
    completed.hidden = true;

}