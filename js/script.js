// добавляем 5 пункт
let listUl = document.getElementsByClassName('menu')[0],
   lastLi = document.createElement('li'),
   item = document.querySelectorAll('.menu-item');
   lastLi.innerText = 'Пятый пункт';
   lastLi.classList.add('menu-item');
   listUl.appendChild(lastLi);

// меняем местами элементы
listUl.insertBefore(item[2], item[1]);

// меняем фон
document.body.style.backgroundImage = "url('./img/apple_true.jpg')";

// меняем заголовок
document.getElementById('title').innerHTML = 'Мы продаем только подлинную технику Apple';

//удаляем рекламу
let ad = document.querySelector('.adv');
ad.remove(ad);

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