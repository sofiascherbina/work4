let stTable = document.querySelector("#students-table tbody");
let getBtn = document.querySelector("#get-students-btn");
let postBtn = document.querySelector("#add-student-btn");
let form = document.querySelector('#add-student-form');
let data = [];
// Функція для отримання всіх студентів

async function getStudents() {
    try{
        const response = await fetch('students.json')
        const json = await response.json();
        data = json.students;
        renderStudents(data);
         if(data.length === 0 ){
            throw new Error('studetns are not found');
        }
    }
    catch{
        return alert('studetns are not found');
    }
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

async function addStudent(e) {
    try{
        let getFetch = await fetch('http://localhost:3001/students');
        let res = await getFetch.json();
        async function studentCreate(students){
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
            let postedStudent =  await fetch('http://localhost:3001/students', options);
             if(!postedStudent.ok){
                throw new Error('studetn is not added');
            }
            return await postedStudent.json();
        }
        let result = await studentCreate(res);
        data.push(result);
        stTable.innerHTML = '';
        renderStudents(data);
        form.reset();
    }
    catch{
        return alert('studetn is not added');
    }
};

postBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    addStudent(form)
    getStudents();
    // maxId++;
    // form.reset();
});

// Функція для оновлення студента

async function updateStudent(id) {
    try{
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
    let updateFetch = await fetch(`http://localhost:3001/students/${id}`,options);
    if(!updateFetch.ok){
         throw new Error('studetn is not updated');
    }
    let updatedRes = await updateFetch.json();
    data.push(updatedRes);
    renderStudents([updatedRes]);
    stTable.innerHTML = '';
    getStudents();
    }
    catch{
        return alert('error')
    }
 }

// Функція для видалення студента

async function deleteStudent(id) {
   try{
    const options={
        method:'DELETE'
    }
    let deleteFetch = await  fetch(`http://localhost:3001/students/${id}`,options);
    let res = await deleteFetch.json();
    data.splice(data.indexOf(res),1);
    stTable.innerHTML = '';
        getStudents();
   }
   catch{
    return alert('error')
   }
};
stTable.addEventListener('click',(event)=>{
    if (event.target.classList.contains('delete-btn')) {
        deleteStudent(event.target.id)
    }
     if (event.target.classList.contains('update-btn')) {
        updateStudent(event.target.id)
    }
});