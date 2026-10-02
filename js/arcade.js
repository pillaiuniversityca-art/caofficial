/**
 * COMPUTER ASSOCIATION × BITFEST 2027 : THE SILVER JUBILEE EDITION
 * Royal Starlight Canvas & Interactive Controls
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroRoyalCanvas();
  initKonamiCode();
  initQuestSelector();
});

/**
 * 1. Royal Floating Celestial Sparks & Golden Particles Canvas
 */
function initHeroRoyalCanvas() {
  const canvas = document.getElementById('heroArcadeCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    particles = [];
    const count = Math.min(Math.floor(width / 24), 50);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1.2,
        speedY: Math.random() * 0.5 + 0.15,
        speedX: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.5 ? '#d97706' : (Math.random() > 0.5 ? '#2563eb' : '#94a3b8'),
        isStar: Math.random() > 0.4
      });
    }
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX - width / 2) * 0.03;
    mouse.targetY = (e.clientY - height / 2) * 0.03;
  }, { passive: true });

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Smooth mouse parallax
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    ctx.save();
    ctx.translate(mouse.x, mouse.y);

    // Render Floating Royal Sparks & Golden Stars
    particles.forEach(p => {
      p.y -= p.speedY;
      p.x += p.speedX;

      if (p.y < 0) {
        p.y = height;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      if (p.isStar) {
        // Draw 4-point diamond star
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - p.size * 1.5);
        ctx.lineTo(p.x + p.size, p.y);
        ctx.lineTo(p.x, p.y + p.size * 1.5);
        ctx.lineTo(p.x - p.size, p.y);
        ctx.closePath();
        ctx.fill();
      } else {
        // Draw soft glowing circular particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });

    ctx.restore();

    requestAnimationFrame(render);
  }

  render();
}

/**
 * 2. Secret Konami Code Easter Egg
 */
function initKonamiCode() {
  const secretCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight'
  ];
  let inputSequence = [];

  window.addEventListener('keydown', (e) => {
    inputSequence.push(e.key);
    if (inputSequence.length > secretCode.length) {
      inputSequence.shift();
    }

    if (JSON.stringify(inputSequence) === JSON.stringify(secretCode)) {
      triggerSilverJubileeEgg();
      inputSequence = [];
    }
  });
}

function triggerSilverJubileeEgg() {
  let banner = document.getElementById('konamiBanner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'konamiBanner';
    banner.className = 'konami-banner';
    banner.innerHTML = `
      <div style="font-size: 2rem; color: #fbbf24;"><i class="fas fa-crown"></i></div>
      <div>
        <div style="font-family: var(--font-heading); font-weight: 800; color: #fbbf24; font-size: 1.1rem;">
          SILVER JUBILEE ROYAL REVELATION!
        </div>
        <div style="font-size: 0.88rem; color: #cbd5e1;">
          Celebrating 25 Years of the Computer Association (2002–2027) at Pillai University.
        </div>
      </div>
    `;
    document.body.appendChild(banner);
  }

  banner.classList.add('active');
  setTimeout(() => {
    banner.classList.remove('active');
  }, 4500);
}

/**
 * 3. Interactive Quest Selector
 */
function initQuestSelector() {
  const questItems = document.querySelectorAll('.quest-item');
  const displayDesc = document.getElementById('questDisplayDesc');
  if (!questItems.length || !displayDesc) return;

  questItems.forEach(item => {
    item.addEventListener('click', () => {
      questItems.forEach(q => q.classList.remove('selected'));
      item.classList.add('selected');
      const desc = item.getAttribute('data-desc');
      if (desc) {
        displayDesc.textContent = desc;
      }
    });
  });
}
