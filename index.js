function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en], [data-th], [data-zh]').forEach(element => {
        if (element.hasAttribute(`data-${lang}`)) {
            element.textContent = element.getAttribute(`data-${lang}`);
        }
    });
}

// The rest of your existing JavaScript remains unchanged

document.addEventListener('DOMContentLoaded', function() {
    // Your existing DOMContentLoaded code remains unchanged

    // Add this line at the end of the DOMContentLoaded function
    changeLanguage('en'); // Set initial language to English
});


function showPage(pageId) {
document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
});
document.getElementById(pageId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
// Add schema markup for better SEO
const script = document.createElement('script');
script.setAttribute('type', 'application/ld+json');
script.textContent = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "ProfessionalService",
    "name": "Eco-Tech Architects & Engineers",
    "description": "State-of-the-art architectural and engineering services specializing in sustainable and eco-friendly solutions.",
    "url": "https://www.example.com",
    "sameAs": [
        "https://www.facebook.com/ecotecharchitects",
        "https://www.linkedin.com/company/ecotecharchitects",
        "https://twitter.com/ecotecharch"
    ]
});
document.head.appendChild(script);
});