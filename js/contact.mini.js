document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".contact__form"),t=document.querySelector(".contact__form-success"),n=n=>{n.preventDefault(),e.reset(),t.style.display="block",setTimeout(()=>{t.style.display="none"},5e3)};e.addEventListener("submit",n)});