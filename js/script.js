// добавляем 5 пункт
let listUl = document.getElementsByClassName('menu')[0];
let lastLi = document.createElement('li');
lastLi.innerText = 'Пятый пункт';
lastLi.classList.add('menu-item');
listUl.appendChild(lastLi);

// меняем местами элементы
let remove = document.getElementsByClassName('menu-item')[1];
remove = listUl.removeChild(remove);
// listUl.insertBefore(remove, listUl.menu-item[2]);

// меняем фон
document.body.style.backgroundImage = "url('./img/apple_true.jpg')";

// меняем заголовок
document.getElementById('title').innerHTML = 'Мы продаем только подлинную технику Apple';

//удаляем рекламу
let ad = document.querySelector('.adv');
let column = document.getElementsByClassName('column')[1];
column.removeChild(ad);

// мнение пользователя о Apple
let ans;
function mindUser() {
   ans = prompt("Ваше отношение к технике Аpple?", '');

   while (ans == "" || ans == null) {
      ans = prompt("Ваше отношение к технике Аpple?", '');
   }
}
mindUser();
document.getElementById('prompt').innerText = ans;


// listUl.insertBefore(remove, listUl.menu-item[3]);
// listUl.insertBefore(newLi, list.children[1]);


// insertBefore(node2_copy, node1);
// node2.parentNode.insertBefore(node1, node2);
// replaceChild(node2, node2_copy);
// menu.classList.add('menu-item');
// document.body.insertBefore('.menu.menu-item[2], .menu.menu-item[1]');

// создаем элемент
// let div = document.createElement('div');
//    text = document.createTextNode('android');
// listUl.appendChild(div);


/* 
let list = document.getElementsByClassName('menu-item');

list = document.querySelectorAll('.menu.menu-list');


// сменить фон
document.body.style.background = '';

// создать элемент
let div = document.createElement('div');
   text = document.createTextNode('some text');

// вставить в нужное место\поменять местами
document.body.insertBefore('li, before li[2]')

// удалить
removeChild */