// hamburger for naviguation bar
function toggleMenu() {
    document.querySelector('nav ul').classList.toggle('active');
}
// hamburger for language switcher
function toggleLangMenu() {
    document.querySelector('.lang-switcher').classList.toggle('active');
}
// language part
function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en], [data-th], [data-zh]').forEach(element => {
        if (element.hasAttribute(`data-${lang}`)) {
            element.textContent = element.getAttribute(`data-${lang}`);
        }
    });
    document.querySelector('.lang-switcher').classList.remove('active');
}
// showing different pages
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    document.querySelector('nav ul').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    changeLanguage('en');
    
    // Close menus when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.hamburger-menu') && !event.target.closest('nav ul')) {
            document.querySelector('nav ul').classList.remove('active');
        }
        if (!event.target.closest('.lang-hamburger') && !event.target.closest('.lang-switcher')) {
            document.querySelector('.lang-switcher').classList.remove('active');
        }
    });
});

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "C Blue",
  "url": "https://cblue.co.th",
  "logo": "https://cblue.co.th/logo.jng",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+66-869909631",
    "contactType": "customer service",
    "availableLanguage": ["Thai", "English", "Chinese"]
  }
}
```

