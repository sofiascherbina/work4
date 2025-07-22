const inputs = document.querySelectorAll('#form input')
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userSurname = document.querySelector('#surname');
const userNumber = document.querySelector('#number');
const addBtn= document.querySelector('#add-btn');
const deleteBtn= document.querySelector('.delete-btn');
const list = document.querySelector('#contacts-list');
let id = 0;
addBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    const contact = {
        name : userName.value,
        surname : userSurname.value,
        number : userNumber.value,
        email : userEmail.value
    }
    id++; 
    localStorage.setItem(`contact-${id}`, JSON.stringify(contact));

      let li = document.createElement('li');
      li.dataset.id = id;
        li.innerHTML = `<ul>
            <li><p>name : ${userName.value}</p></li>
            <li><p>surname : ${userSurname.value}</p></li>
            <li><p>number : ${userNumber.value}</p></li>
            <li><p>email : ${userEmail.value}</p></li>
        </ul>
        <button class="delete-btn">delete</button>`
          
        list.append(li); 

        inputs.forEach(item=>{
            setTimeout(()=>{
                item.value= '';
            }, 500)
        })
list.addEventListener('click', (event)=>{
    if(event.target.classList.contains('delete-btn')){
        const li = event.target.closest('li');
        id = li.dataset.id;
        localStorage.removeItem(`contact-${id}`);
        li.remove();
        id--;
    }
});
         
});

// localStorage.clear();