// === CURSOR ===
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // === STARS ===
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  let stars = [];
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  function initStars() {
    stars = [];
    for (let i = 0; i < 180; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random(),
        speed: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.5 ? '#f472b6' : '#c4b5fd'
      });
    }
  }
  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.a += s.speed * 0.01;
      const alpha = (Math.sin(s.a) + 1) / 2;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color.replace(')', `,${alpha * 0.9})`).replace('rgb', 'rgba').replace('#f472b6', `rgba(244,114,182,${alpha * 0.8})`).replace('#c4b5fd', `rgba(196,181,253,${alpha * 0.7})`);
      ctx.fill();
    });
    requestAnimationFrame(animateStars);
  }
  resizeCanvas(); initStars(); animateStars();
  window.addEventListener('resize', () => { resizeCanvas(); initStars(); });

  // === SCROLL REVEAL ===
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => observer.observe(r));

  // === CONFETTI ===
  const confettiColors = ['#f472b6','#a855f7','#c4b5fd','#fbcfe8','#fbbf24','#ffffff'];
  function launchConfetti() {
    for (let i = 0; i < 60; i++) {
      setTimeout(() => {
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        el.style.left = Math.random() * 100 + 'vw';
        el.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        el.style.animationDuration = (Math.random() * 2 + 2) + 's';
        el.style.animationDelay = '0s';
        el.style.width = (Math.random() * 8 + 5) + 'px';
        el.style.height = (Math.random() * 8 + 5) + 'px';
        el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 4500);
      }, i * 40);
    }
  }
  // Launch confetti on load after 1s
  setTimeout(launchConfetti, 1000);
  // Re-launch on double click
  document.addEventListener('dblclick', launchConfetti);

// lagu awal

    document.addEventListener("DOMContentLoaded", function() {
        var lagu1 = document.getElementById('lagu1');
        var lagu2 = document.getElementById('lagu2');

        // Saat lagu 1 selesai, putar lagu 2
        lagu1.addEventListener('ended', function() {
            lagu2.play();
        });
    });

  // === MUSIC PLAYER ===
const video = document.getElementById('mvVideo');
const albumArt = document.getElementById('albumArt');
let isPlaying = false;

function togglePlay() {
  isPlaying = !isPlaying;
  const btn = document.getElementById('playBtn');

  if (isPlaying) {
    albumArt.style.display = 'none';
    video.style.display = 'block';
    video.play();
    btn.textContent = '⏸';
  } else {
    video.pause();
    video.style.display = 'none';
    albumArt.style.display = 'flex';
    btn.textContent = '▶';
  }
}
