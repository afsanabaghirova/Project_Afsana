
const addBtn = document.querySelector('.add-btn');
const container = document.querySelector('.todo-container');
addBtn.addEventListener('click', (e) => {
    console.log(e.target)
    const newDiv = document.createElement('div');
    newDiv.classList.add('single-input');
    const newInput = document.createElement('input');
    newInput.classList.add('todo-input')
    const newBtn = document.createElement('button');
    newBtn.innerHTML = "&times;";
    newBtn.classList.add('remove-button')
    newDiv.append(newInput, newBtn)
    container.append(newDiv)
});