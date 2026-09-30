(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const progress = document.querySelector('.scroll-progress');
  addEventListener('scroll', () => { if (progress) progress.style.transform = `scaleX(${scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)})`; }, { passive: true });
  const reveal = document.querySelectorAll('[data-reveal]');
  if (!reduce && 'IntersectionObserver' in window) { const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('is-visible')), { threshold: .08 }); reveal.forEach(e => io.observe(e)); } else reveal.forEach(e => e.classList.add('is-visible'));
  document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => { document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'; });
  if (!reduce) document.querySelectorAll('.tilt').forEach(card => card.addEventListener('pointermove', e => { const r = card.getBoundingClientRect(); card.style.transform = `perspective(700px) rotateX(${((e.clientY-r.top)/r.height-.5)*-5}deg) rotateY(${((e.clientX-r.left)/r.width-.5)*5}deg)`; }));
  document.querySelectorAll('.tilt').forEach(card => card.addEventListener('pointerleave', () => { card.style.transform = ''; }));
  const canvas = document.querySelector('.particles'); if (!canvas || reduce) return; const ctx = canvas.getContext('2d'); let ps=[]; const resize=()=>{const d=Math.min(devicePixelRatio||1,2);canvas.width=canvas.clientWidth*d;canvas.height=canvas.clientHeight*d;ctx.setTransform(d,0,0,d,0,0);ps=Array.from({length:Math.min(60,Math.floor(canvas.clientWidth*canvas.clientHeight/22000))},()=>({x:Math.random()*canvas.clientWidth,y:Math.random()*canvas.clientHeight,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25}));}; const draw=()=>{ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);for(const p of ps){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>canvas.clientWidth)p.vx*=-1;if(p.y<0||p.y>canvas.clientHeight)p.vy*=-1;ctx.fillStyle='rgba(0,240,255,.65)';ctx.fillRect(p.x,p.y,2,2)}requestAnimationFrame(draw)}; resize(); addEventListener('resize',resize,{passive:true}); draw();
})();
