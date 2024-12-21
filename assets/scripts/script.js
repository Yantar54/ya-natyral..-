// Const body = document.querySelector("body")
// const btn = document.createElement("button")
// const input = document.querySelector("input")


// const p = document.createElement("p")

// body.append(btn)
// body.append(p)

// btn.innerText = "button" 
// p.innerText = "click to button"


// btn.addEventListener("mouse",() => {
//     p.innerText = "lox"
    
// })

// btn.addEventListener("click", () => {
    
    
// })



// const body = document.querySelector("body");
// const ul = document.createElement("ul");
// const btn = document.createElement("button");


// body.append(ul)
// body.append(btn)
// btn.innerText = "button"




// btn.addEventListener("click", () => {
//     const input = document.querySelector("input")
//     const ban = [input.value] 
//     const p = document.createElement("p")
    
    
//     body.append(p)
//     p.innerText = ban
    

// });

// group code

// const body = document.querySelector("body");
// const btn = document.querySelector ("button");

// body.append(btn);
// btn.innerText = "button";

// function fu(){
//     console.log("hi baby")
// };


// btn.addEventListener("click", fu);






// latest


// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const list = document.querySelector('.list');

// const arr = [];

// // Обработчик отправки формы
// form.addEventListener('submit', (e) => {
//     e.preventDefault(); // Отменить стандартное поведение формы

//     const text = input.value.trim(); // Получить и обрезать пробелы по краям

//     // Если текст пустой, ничего не добавлять
//     if (text === '') {
//         alert('Введите текст задачи!');
//         return;
//     }

//     // Если текст не пустой, добавить его в массив
//     arr.push(text);

//     // Очистить input
//     input.value = '';

//     console.log(arr);

//     // Обновить список задач на странице
//     updateList();
// });

// // Обновление списка задач
// function updateList() {
//     list.innerHTML = ''; // Очистить текущий список

//     arr.forEach((item) => {
//         // Добавляем элемент в список
//         const p = document.createElement('p');
//         p.textContent = item;
//         list.appendChild(p);
//     });
// }

// // Обработчик события для нажатия клавиши Enter в input
// input.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         // Если клавиша Enter нажата, удалить старое значение
//         input.value = ''; // Очищаем input
//     }
// });

// to do drist

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const button = document.querySelector("button");
// const list = document.querySelector('.list');

// const arrey = [];

// function fu(){
//     // let userInput = input.value
//     // userInput = ''
//   input.value = '';
// };



// function fuu(){
//   jsonAdd = JSON.stringify(arrey);
//   localStorage.setItem('arrey', jsonAdd);
  
//   jsonGet = JSON.parse(jsonAdd);
  
//   text.push(jsonGet);

//   arrey.forEach((c) => {
//     list.innerHTML += (`<li>${c}</li>`);
//   });
// };

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

  
  

//   text = input.value;
//   if(text === ''){
//     alert('empty');
//     return;
//   }
  
//   arrey.push(text);
  
//   console.table(arrey);
  
//   fuu(arrey);
//   fu();
  
  

// });




// btns.ForEach((c,i) => {
//   c.addEventListener('click', () =>{
//       hideConten();
//       showConten(i);
//     });

// });

// let i = 0;
	
// const id = setInterval(() => {
//   console.log("hi baby");
//   i++;

//     if(i == 5){
//       clearInterval(id);
//     }


// }, 1000);

// const userDate = {
//   a: 'a'
//   ,b: 'b'
//   ,c: 'c'
//   ,d: 'd'
//   ,
// };

// userJson = JSON.stringify(userDate);
// console.log(userJson);
// localStorage.setItem("first", userJson);
// const userStorage = localStorage.getItem("first", userJson);

// console.log(userStorage, "from locak storage");

// objectToJson
// jsonToObject

// const form = document.querySelector('.form');
// const email = document.querySelector('.firstI');
// const password = document.querySelector('.secondI');
// const save = document.querySelector('.save');
// const login = document.querySelector('.login');

const body = document.querySelector("body");
const input = document.querySelector(".regI");
const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const btn = document.getElementById('loginBtn');
const btn2 = document.getElementById('last');

let email = input.value;
let valueM = regEx.test(email);

setInterval(function() {
console.log("check:");


  email = input.value;
  valueM = regEx.test(email);

console.log(valueM);
if(input.value === ''){
  body.style.backgroundColor = "white";
  input.style.border = '5px solid black';
}else if(valueM === false){
  body.style.backgroundColor = "red";
  input.style.border = '5px solid red';
}else{
    body.style.backgroundColor = "green";
  input.style.border = '5px solid darkgreen';
}
},1000);


btn.addEventListener("click", (e) => {
  e.preventDefault();

  if(valueM === true){
    const add = localStorage.setItem('new',JSON.stringify(input.value));
    console.log('yes');
  }else{
    console.error('vab ban');
  };

});

btn2.addEventListener('click', (e) => {
  const parsed = JSON.parse(localStorage.getItem('new'));
  
  if(parsed === input.value){
    window.location.href = "newtab.html";
    console.log('tp');
  }else if(!parsed === input.value){
    console.error('est taki');
  };

});

// next

// login.addEventListener("click", (e) => {
//   const userEmail = localStorage.getItem("userEmail");
//   const userPassword = localStorage.getItem("userPassword");
  
//   if(email.valuer == userEmail && password.value == userPassword){
//     console.log("good");
//   }else{
//     window.location = './inex.html';
//   };

// });


// save.addEventListener("click", (e) => {
//   const userEmail = email.value;
//   const userPassword = password.value;
  
  
//   localStorage.setItem("userPassword", userPassword);
//   localStorage.setItem("userEmail", userEmail);

//   alert("saved");

//   // console.log(userEmail);
//   // console.log(userPassword);


// }); 







