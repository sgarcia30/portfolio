const header = document.querySelector('#nav-id');
const homePageHeader = document.querySelector('.header-img');

const homePageHeaderOptions = {
    rootMargin: '-200px 0px 0px 0px'
};

const homePageHeaderObserver = new IntersectionObserver(function(entries, homePageHeaderObserver) {
    console.log('happening???');
    entries.forEach(entry => {
        console.log('entry', entry.target);
        if (!entry.isIntersecting) {
            header.classList.add('navbarScrolled');
            header.classList.remove('navbar');
        } else {
            header.classList.add('navbar');
            header.classList.remove('navbarScrolled');
        }
    });
}, homePageHeaderOptions);

homePageHeaderObserver.observe(homePageHeader);