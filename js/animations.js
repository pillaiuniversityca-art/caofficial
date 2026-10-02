/**
 * COMPUTER ASSOCIATION 25 YEARS SILVER JUBILEE
 * Scroll & Micro-Interaction Animations (IntersectionObserver & 3D Card Tilts)
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveals();
  initStatsCounters();
  init3DCardTilts();
  initFaqAccordion();
});

/**
 * Scroll Reveal Animations via IntersectionObserver
 */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Animated Number Counters
 */
function initStatsCounters() {
  const counterElements = document.querySelectorAll('[data-counter-target]');
  if (counterElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-counter-target'), 10);
        const prefix = el.getAttribute('data-counter-prefix') || '';
        const suffix = el.getAttribute('data-counter-suffix') || '';
        const duration = 1800; // ms
        let start = 0;
        const startTime = performance.now();

        function step(currentTime) {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          // Ease out cubic
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeOut * target);
          el.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
          }
        }

        requestAnimationFrame(step);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach(el => observer.observe(el));
}

/**
 * 3D Magnetic Card Tilt Interaction
 */
function init3DCardTilts() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // Ignore touch devices

  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/**
 * FAQ Accordion Expansion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question, .faq-question-btn');
    questionBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Global fallback handler for inline onclick
window.toggleFaq = function(btn) {
  const item = btn.closest('.faq-item');
  if (!item) return;
  const allItems = document.querySelectorAll('.faq-item');
  const isActive = item.classList.contains('active');
  allItems.forEach(i => i.classList.remove('active'));
  if (!isActive) {
    item.classList.add('active');
  }
};
