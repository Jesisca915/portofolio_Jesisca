// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', function(event) {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close menu when clicking on a nav link
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove('active');
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

// Scroll-based navbar background effect
let ticking = false;

window.addEventListener("scroll", function () {
  if (!ticking) {
    requestAnimationFrame(function () {
      const navbar = document.querySelector('.navbar');
      const scrollTop = window.pageYOffset;

      if (scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      ticking = false;
    });
    ticking = true;
  }
});

// Easing function for smoother transitions
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
  // Add animation classes to elements
  const animateElements = document.querySelectorAll('.about-tree, .project-tree, .contact-info p, .screenshot-grid > *');
  animateElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
});

// Add hover effects for tree branches
document.addEventListener('DOMContentLoaded', function() {
  const treeBranches = document.querySelectorAll('.tree-branch, .project-branch');

  treeBranches.forEach(branch => {
    branch.addEventListener('mouseenter', function() {
      // Add a subtle glow effect
      this.style.boxShadow = '0 15px 50px rgba(0, 212, 255, 0.2)';
    });

    branch.addEventListener('mouseleave', function() {
      // Reset to original shadow
      this.style.boxShadow = 'var(--shadow)';
    });
  });
});

// Add click effect for project cards
document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-info');

  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      // Add a ripple effect
      const ripple = document.createElement('div');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(0, 212, 255, 0.3)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s linear';
      ripple.style.left = '50%';
      ripple.style.top = '50%';
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      ripple.style.marginLeft = '-10px';
      ripple.style.marginTop = '-10px';
      ripple.style.pointerEvents = 'none';

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// Add ripple animation keyframes (if not already in CSS)
if (!document.querySelector('#ripple-keyframes')) {
  const style = document.createElement('style');
  style.id = 'ripple-keyframes';
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}
