'use strict';

// .document - метод документ работает только внутри браузера для взаимодействия с элементами именно на странице

const box = document.getElementById('box');
// берем элемент по id - уникальный индентификатор

console.log(box);

const btns = document.getElementsByTagName('button')[1];
// берем элемент со страницы по тегу buttons, для того чтобы взять конкретную кнопку, указываем ее индекс

console.log(btns);

/* const btns = document.getElementsByTagName('button'); */
// для того чтобы взять конкретную кнопку, указываем ее индекс. даже если кнопка на странице одна

/* console.log(btns[0]); */

const circles = document.getElementsByClassName('circle');
// берем элемент со страницы по имени класса
console.log(circles);

const hearts = document.querySelectorAll('.heart');
// внутрь (.) помещаем любой css селектор, класс, id, любая вложенность
// в данном случае в коллекциях id записывается с решеткой #
hearts.forEach(item => {
    console.log(item);
});
// с помощью стрелочной функции и метода forEach выводим все 3 itema отдельно

const oneHeart = document.querySelector('.heart');
// querySelector возвращает первый элемент css селектора
console.log(oneHeart);

const oneButton = document.querySelector('button');
// querySelector возвращает первый элемент css селектора
console.log(oneButton);

const firstDiv = document.querySelector('div');
// querySelector возвращает первый элемент css селектора
console.log(firstDiv);
