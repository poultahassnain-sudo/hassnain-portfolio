// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Print / Save as PDF
document.getElementById('printBtn').addEventListener('click', () => window.print());

// Copy email
const copyBtn = document.getElementById('copyBtn');
copyBtn.addEventListener('click', async () => {
  const email = document.getElementById('emailLink').textContent.trim();
  try {
    await navigator.clipboard.writeText(email);
    copyBtn.textContent = 'Copied';
  } catch (e) {
    copyBtn.textContent = 'Copy failed';
  }
  setTimeout(() => (copyBtn.textContent = 'Copy email'), 2000);
});

// Contact form: opens the visitor's email app with the message filled in
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const message = form.message.value.trim();
  if (!name || !message) {
    statusEl.textContent = 'Enter your name and a message first.';
    return;
  }
  statusEl.textContent = '';
  const subject = encodeURIComponent('Message from ' + name);
  const body = encodeURIComponent(message);
  window.location.href = 'mailto:poultahassnain@gmail.com?subject=' + subject + '&body=' + body;
});