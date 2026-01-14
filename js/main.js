// ===== Quotes Carousel =====
const quotes = document.querySelectorAll('.quote-carousel p');
let currentQuote = 0;

function showQuote(index) {
  quotes.forEach((q, i) => {
    q.style.display = i === index ? 'block' : 'none';
  });
}

// Initial display
showQuote(currentQuote);

// Rotate every 5 seconds
setInterval(() => {
  currentQuote = (currentQuote + 1) % quotes.length;
  showQuote(currentQuote);
}, 5000);

// ===== Optional: Tab Switching for Projects =====
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    // Remove active class
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.style.display = 'none');

    // Add active
    tab.classList.add('active');
    tabContents[i].style.display = 'block';
  });
});

// ===== Optional: Animated Counters =====
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const speed = 200; // smaller = faster
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});