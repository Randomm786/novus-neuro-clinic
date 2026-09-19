const toggle=document.querySelector('.mobile-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
const io=('IntersectionObserver' in window)?new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}})},{threshold:.08}):null;
document.querySelectorAll('.reveal').forEach(el=>{if(io)io.observe(el);else el.classList.add('visible');});
// My Neuro Health analytics consent
const GA_ID = 'G-WTPMFT2TNL';
const CONSENT_KEY = 'mnh_analytics_consent';

function loadAnalytics() {
  if (window.mnhAnalyticsLoaded) return;
  window.mnhAnalyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ dataLayer.push(arguments); };

  gtag('js', new Date());

  gtag('config', GA_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(script);
}

function saveAnalyticsChoice(choice) {
  localStorage.setItem(CONSENT_KEY, choice);

  const banner = document.querySelector('.cookie-banner');
  if (banner) banner.remove();

  if (choice === 'accepted') {
    loadAnalytics();
  }
}

function showCookieBanner() {
  if (document.querySelector('.cookie-banner')) return;

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';

  banner.innerHTML = `
    <div class="cookie-banner-inner">
      <div>
        <strong>Website analytics</strong>
        <p>
          We'd like to use Google Analytics to understand how people use
          our website and improve it. Analytics will only load if you accept.
          <a href="privacy.html">Privacy notice</a>
        </p>
      </div>
      <div class="cookie-actions">
        <button type="button" class="cookie-reject">Reject</button>
        <button type="button" class="cookie-accept">Accept analytics</button>
      </div>
    </div>
  `;

  document.body.appendChild(banner);

  banner.querySelector('.cookie-accept')
    .addEventListener('click', () => saveAnalyticsChoice('accepted'));

  banner.querySelector('.cookie-reject')
    .addEventListener('click', () => saveAnalyticsChoice('rejected'));
}

const analyticsChoice = localStorage.getItem(CONSENT_KEY);

if (analyticsChoice === 'accepted') {
  loadAnalytics();
} else if (!analyticsChoice) {
  showCookieBanner();
}

// Add a permanent Cookie settings link to the footer
const copyright = document.querySelector('.copyright');

if (copyright) {
  const settingsButton = document.createElement('button');
  settingsButton.type = 'button';
  settingsButton.className = 'cookie-settings';
  settingsButton.textContent = 'Cookie settings';

  settingsButton.addEventListener('click', () => {
    localStorage.removeItem(CONSENT_KEY);
    showCookieBanner();
  });

  copyright.appendChild(settingsButton);
}
