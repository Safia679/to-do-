function add(){
    const input = document.getElementById("user-value");
    const div = document.getElementById("todo");
    // const newP = document.createElement("h3");
    // newP.innerText = input.value;
    // div.append(newP);
    // input.value = "";
    if(input.value !== ""){
        const createDiv =document.createElement("div");
        createDiv.classList.add("flex");

        const liElement = document.createElement("li");
        liElement.innerText = input.value;
        
        const createSpan = document.createElement("button");
        createSpan.innerText = "Delete";
        
        div.append(createDiv);
        createDiv.append(liElement);
         createDiv.append(createSpan);
        input.value = ""
}
else{
    alert("please enter a value")
}
}