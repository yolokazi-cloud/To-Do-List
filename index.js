    function addTask(){
        let taskInput = document.getElementById("taskInput");
        let tasks = document.getElementById("tasks");

        if(taskInput.value.trim() !==""){
            let listItem = document.createElement("li");
            let checkBox = document.createElement("input");
            let taskText = document.createTextNode(taskInput.value);
            let deleteButton = document.createElement("button");

            checkBox.type = "checkbox";
            deleteButton.textContent = "Delete";
            deleteButton.className ="deletebutton";
            deleteButton.marginRight="20px";
            
            listItem.appendChild(checkBox);
            listItem.appendChild(taskText);
            listItem.appendChild(deleteButton);
            tasks.appendChild(listItem);

            taskInput.value = "";
        }
    }

    let addButton = document.getElementById("addTask");
    addButton.addEventListener("click", addTask);

    let tasks = document.getElementById("tasks");

    tasks.addEventListener("click", function(Event){
        if(Event.target.tagName === "BUTTON" && Event.target.textContent === "Delete"){
            let listItem = Event.target.parentElement;
            tasks.removeChild(listItem);
        }
    });
   
    //mark as complete
    tasks.addEventListener("change", function(Event){
    if(Event.target.tagName === "INPUT" && Event.target.type === "checkbox")
    {
    let listItem = Event.target.parentElement;
    listItem.style.textDecoration = Event.target.checked ? "line-through": "none";
    } 

    });



