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
let elem = document.querySelector('#elem');
let btn = document.querySelector('#btn');
let border = elem.style.border;
btn.addEventListener('click', function(){
    let width = elem.style.borderWidth;
    let type = elem.style.borderStyle;
    let color = elem.style.borderColor;
    console.log('Толщина границы: ' + width + '\nТип границы: ' + type + '\nЦвет границы: ' + color);
})

//5
