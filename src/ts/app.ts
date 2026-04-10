const API_BASE = 'https://api.navidonskis.com';

function initNavigation(): void {
  const nav = document.querySelector('.nav') as HTMLElement;
  const toggle = document.querySelector('.nav__toggle') as HTMLButtonElement;

  if (!nav || !toggle) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
  });

  nav.querySelectorAll('.nav__link, .nav__cta').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
    });
  });
}

function initContactForm(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement;
  const status = document.getElementById('form-status') as HTMLElement;

  if (!form || !status) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) return;

    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    status.className = 'contact-form__status';

    try {
      const response = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        status.className = 'contact-form__status contact-form__status--success';
        status.textContent = 'Message sent. I\'ll get back to you soon.';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      status.className = 'contact-form__status contact-form__status--error';
      status.textContent = 'Something went wrong. Please try again later.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send message';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initContactForm();
});
