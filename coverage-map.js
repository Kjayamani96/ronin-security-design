(()=>{
 const hero=document.querySelector('#coverage-hero');if(!hero)return;
 const svg=hero.querySelector('#coverage-map'),stage=hero.querySelector('#map-stage');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let frame=0,timer=0;
 const start=[-180,-90,360,180],end=[97,-11,24,16];
 function finish(){svg.setAttribute('viewBox',end.join(' '));hero.classList.add('map-arrived');stage.textContent='13 States. One Malaysia.';}
 function play(){cancelAnimationFrame(frame);clearTimeout(timer);hero.classList.remove('map-arrived');hero.querySelectorAll('[aria-pressed]').forEach(b=>b.setAttribute('aria-pressed','false'));hero.querySelectorAll('.is-selected').forEach(p=>p.classList.remove('is-selected'));if(reduced.matches){finish();return;}svg.setAttribute('viewBox',start.join(' '));stage.textContent='From The World To Malaysia';let begin;
 function tick(now){if(!begin)begin=now;const elapsed=now-begin;const t=Math.min(1,Math.max(0,(elapsed-450)/2100));const eased=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;svg.setAttribute('viewBox',start.map((v,i)=>v+(end[i]-v)*eased).join(' '));if(t<1)frame=requestAnimationFrame(tick);else finish();}frame=requestAnimationFrame(tick);}

 reduced.addEventListener('change',()=>{if(reduced.matches){cancelAnimationFrame(frame);finish();}});
 if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){play();observer.disconnect();}},{threshold:.25});observer.observe(hero);}else play();
})();
