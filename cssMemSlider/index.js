const IMAGE = document.querySelector('img');
const TEXT = document.querySelector('.text');
const BTN = document.querySelectorAll('.circle_hover');
let temp, rendomNumber=0;
const MEMS_INFO = [
    
    {
        "text": "Hello!!!! Have a good day!",
        "img": "asset/img/good luck.jpg"
    },
    {
        "text": "Love!!!!!!",
        "img":"asset/img/love.jpg"
    },
    {
        "text": "Relax!!!!!!!",
        "img":"asset/img/relax.jpg"
    },
    {
        "text": "Dream!!!!!!!!",
        "img":"asset/img/dream.jpg"
    }
];


for( let i = 0; i < BTN.length; i++) {
BTN[i].addEventListener('click', () => {
        IMAGE.src = MEMS_INFO[i].img;
        TEXT.textContent = MEMS_INFO[i].text
})
}