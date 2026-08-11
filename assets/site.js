const toggle=document.querySelector('.mobile-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
const form=document.querySelector('[data-demo-form]');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const msg=form.querySelector('.form-note');msg.textContent='Thanks — this demo form is not connected yet. We will add a secure enquiry system before launch.';msg.style.color='#0b7b86';});}
