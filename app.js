window.addEventListener('beforeunload', save);

const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


// create new todo html template & insert in DOM
const generateTodo = () => {
    
    let html = ``;
    db.forEach((todo, index) => {
        
        html += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i id="${index}" class="far fa-trash-alt delete"></i>
      </li>
    `;
        list.innerHTML = html;
    })
}

generateTodo();

// add todo
addTodo.addEventListener('submit', e => {e
    e.preventDefault();
    const newTodo = addTodo.add.value.trim().toLowerCase();
    if (newTodo.length) {
        db.push(newTodo);
        generateTodo();
        addTodo.reset();
    }
});

// delete todo
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        let id = e.target.id;
        db.splice(id, 1);
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

function save() {
    localStorage.todos = JSON.stringify(db);
}
