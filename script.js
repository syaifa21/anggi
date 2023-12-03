const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "JELASSSS AKU JUAAA";
    gif.src = 
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp"
});

noBtn.addEventListener("mouseover", () => {
    const noBtnREct = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnREct.width;
    const maxY = window.innerHeight - noBtnREct.height;



    const randomX = Math.floor(Math.random() * maxX);
    
    const randomY = Math.floor(Math.random() * maxY);


    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomy + "px";
})
noBtn.addEventListener("click", () => {
    question.innerHTML = "PAKYU KAU";
    gif.src = 
    "https://s.kaskus.id/images/2019/02/24/10173425_201902241209080610.gif"

