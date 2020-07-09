const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')


// create new todo html template & insert in DOM
const generateTodo = (newTodo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${newTodo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;

    list.innerHTML += html;
}

// add todo
addTodo.addEventListener('submit', e => {e
    e.preventDefault();
    const newTodo = addTodo.add.value.trim().toLowerCase();
    if (newTodo.length) {
        generateTodo(newTodo);
        addTodo.reset();
    }
});

// delete todo
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodos = (insertData) => {

// add filtered class
Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(insertData))
    .forEach(todo => todo.classList.add('hidden'));

// remove filtered class
Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(insertData))
    .forEach(todo => todo.classList.remove('hidden'));

};

// keyup event 
search.addEventListener('keyup', () => {
    const insertData = search.value.trim();
    filterTodos(insertData);
});