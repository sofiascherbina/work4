let stTable = document.querySelector("#students-table tbody");
let getBtn = document.querySelector("#get-students-btn");
let postBtn = document.querySelector("#add-student-btn");
let form = document.querySelector('#add-student-form');
let data = [];
// Функція для отримання всіх студентів

function getStudents() {
fetch('students.json')
    .then(response=> response.json())
    .then(json => {
        data = json.students;
        renderStudents(data);
    });
}

// Функція для відображення студентів у таблиці

function renderStudents(students) {
const markup = students
    .map(({id,name,age,course,skills,email,isEnrolled})=>{
        return `<tr>
        <th>${id}</th>
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${skills}</td>
        <td>${email}</td>
        <td>${isEnrolled}</td>
        <td><button class = "update-btn" id="${id}">Update</button></td>
        <td><button class = "delete-btn" id="${id}">Delete</button></td>
        </tr>`;
    }) 
    .join("");
    stTable.insertAdjacentHTML("beforeend", markup);
}

getBtn.addEventListener('click', getStudents);

// Функція для додавання нового студента

function addStudent(e) {
    fetch('http://localhost:3001/students')
        .then(res => res.json())
        .then(students => {
            data = Array.isArray(students) ? students : students.students;
            const maxId = data.length ? Math.max(...data.map(s => s.id)) : 5;

            let newStudent = {
                id: `${maxId + 1}`,
                name: e.name.value,
                age: e.age.value,
                course: e.course.value,
                skills: e.skills.value,
                email: e.email.value,
                isEnrolled: e.isEnrolled.value
            };

            const options = {
                method: 'POST',
                body: JSON.stringify(newStudent),
                headers: { "Content-Type": "application/json;charset=UTF-8" }
            };

            return fetch('http://localhost:3001/students', options);
        })
        .then(res => res.json())
        .then(json => {
            data.push(json);
            renderStudents([json]);
            form.reset();
        });
};

postBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    addStudent(form)
    getStudents();
    // maxId++;
    // form.reset();
});

// Функція для оновлення студента

function updateStudent(id) {
    let updatedStudent = {
        id: `${id}`,
        name: form.name.value,
        age: form.age.value,
        course: form.course.value,
        skills: form.skills.value,
        email: form.email.value,
        isEnrolled: form.isEnrolled.value
    };

 const options={
        method:'PUT',
        body: JSON.stringify(updatedStudent),
        headers: { "Content-Type": "application/json;charset=UTF-8" }
    }
    fetch(`http://localhost:3001/students/${id}`,options)
    .then(res => res.json())
    .then(json =>{
        data.push(json);
        renderStudents([json]);
        getStudents();
    })
 }

// Функція для видалення студента
function deleteStudent(id) {
    const options={
        method:'DELETE'
    }
    fetch(`http://localhost:3001/students/${id}`,options)
    .then(res => res.json())
    .then(json =>{
        data.splice(data.indexOf(json),1);
        getStudents();
    })
};

stTable.addEventListener('click',(event)=>{
    if (event.target.classList.contains('delete-btn')) {
        deleteStudent(event.target.id)
    }
     if (event.target.classList.contains('update-btn')) {
        updateStudent(event.target.id)
    }
});