// let elem = document.querySelector('#elem');
// elem.style.color = 'red';
// console.log(elem.style.color); // выведет 'red';

//2.1
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function (){
//     elem.style.width = '400px';
//     elem.style.height = '300px';
// })

//2.2
// let elem = document.querySelector('#elem');
// console.log(parseInt(elem.style.width) + ' ' + parseInt(elem.style.height)); 

//2.3
// let elem = document.querySelector('#elem');
// console.log(parseFloat(elem.style.fontSize)); 

//3
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// let width = elem.style.width;
// let height = elem.style.height;
// btn.addEventListener('click', function(){
//     let widthNm = parseInt(width);
//     elem.style.width = (widthNm + 50) + 'px';
//     let heightNm = parseInt(height);
//     elem.style.height = (heightNm + 50) + 'px';
// })

//3.2
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// let width = elem.style.width;
// let height = elem.style.height;
// btn.addEventListener('click', function(){
//     let widthNm = parseInt(width);
//     elem.style.width = (widthNm * 1.1) + 'px';
//     let heightNm = parseInt(height);
//     elem.style.height = (heightNm * 1.1) + 'px';
// })

//4
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// let border = elem.style.border;
// btn.addEventListener('click', function(){
//     let width = elem.style.borderWidth;
//     let type = elem.style.borderStyle;
//     let color = elem.style.borderColor;
//     console.log('Толщина границы: ' + width + '\nТип границы: ' + type + '\nЦвет границы: ' + color);
// })

//5
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// let btn2 = document.querySelector('#btn2');
// btn.addEventListener('click', function(){
//     elem.style.display = '';
// })

// btn2.addEventListener('click', function(){
//     elem.style.display = 'none';
// })

//5.2
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// let btn2 = document.querySelector('#btn2');
// btn.addEventListener('click', function(){
//     elem.style.backgroundColor = 'green';
// })

// btn2.addEventListener('click', function(){
//     elem.style.backgroundColor = 'red';
// })

//6
// let elem = document.querySelector('#elem');
// elem.style.cssText = `
// 	width: 100px;
// 	height: 100px;
// 	margin: 10px auto;
//     color: red;
// `;

//8
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
//     let computedStyle = getComputedStyle(elem);
//     console.log(computedStyle.width);
//     console.log(computedStyle.height);
// })

//8.2
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
//     let computedStyle = getComputedStyle(elem);
//     elem.style.width = parseInt(computedStyle.width) * 2 + 'px';
//     elem.style.height = parseInt(computedStyle.height) * 2 + 'px';
// })

//9
let elem = document.querySelector('#elem');
let computedStyle = getComputedStyle(elem);
console.log(computedStyle.fontSize); 