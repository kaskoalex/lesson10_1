"use strict";

// Удалить рекламу со страницы
const google=document.querySelectorAll('.adv')
google[0].remove()

//Восстановить порядок книг.
const books=document.querySelectorAll('.book')
books[1].after(books[0])
books[5].after(books[2])
books[4].after(books[3])

//Заменить картинку заднего фона на другую из папки image
document.querySelector('body').style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'; 

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

 books[4].querySelector('a').innerHTML = 'Книга 3. this и Прототипы Объектов'

//Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
const liBook2 = books[0].querySelectorAll('li')

liBook2[3].after(liBook2[6])
liBook2[6].after(liBook2[8])
liBook2[7].after(liBook2[2])

const liBook5 = books[5].querySelectorAll('li')

liBook5[1].after(liBook5[9])
liBook5[4].after(liBook5[2])
liBook5[8].after(liBook5[5])

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const liBook6 = books[2].querySelectorAll('li')

const cloneElem1 = document.createElement('li');
cloneElem1.textContent = 'Глава 8: За пределами ES6'
books[2].querySelector('ul').append(cloneElem1)
liBook6[9].before(cloneElem1)

