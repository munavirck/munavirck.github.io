const nav=document.querySelector('nav'),menu=document.querySelector('.menu');menu.onclick=()=>nav.classList.toggle('open');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');o.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>o.observe(x));
const g=document.querySelector('.glow');addEventListener('pointermove',e=>{g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});