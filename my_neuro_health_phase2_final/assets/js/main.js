const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});}
const observer=('IntersectionObserver'in window)?new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}})},{threshold:.12}):null;
document.querySelectorAll('.reveal').forEach(el=>observer?observer.observe(el):el.classList.add('visible'));
document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.faq-item').classList.toggle('open')));
