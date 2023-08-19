function greeting(name){
    alert('hello, wellcome '+name);
}

// Callback functions synchronous
function processUserInput(callback){
    const name = prompt('please enter your name');
    callback(name);

}
processUserInput(greeting);

//Callback function Asynchronous
const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => {
    console.log("You clicked #addbutton");
})
