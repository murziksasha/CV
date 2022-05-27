"use strict";

window.addEventListener("DOMContentLoaded",()=>{
  const menuBlock = document.querySelector('.menu');
  const menuClose= document.querySelector('.menu__close');
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click',()=>{
      menuBlock.classList.add('active');
      menuClose.addEventListener('click', ()=>{
      menuBlock.classList.remove('active');
    })
  })

  //value on skills
  const valueRating = document.querySelectorAll('.skills__gradient_count');
  const factRatioLine = document.querySelectorAll('.skills__gradient_fact');

  valueRating.forEach((item, i) => {
    factRatioLine[i].style.width = item.innerHTML;
  });


})