const homePageHeaderOptions = {
    rootMargin: '-90% 0px 0px 0px'
};

export const homePageHeaderObserver = new IntersectionObserver((entries) => {
    const header = document.querySelector('header');
    entries.forEach(entry => {
        console.log('entry', entry.target);
        if (!entry.isIntersecting) {
            console.log('header', header);
            header.classList.add('navbarScrolled');
            header.classList.remove('navbar');
        } else {
            header.classList.add('navbar');
            header.classList.remove('navbarScrolled');
        }
    });
}, homePageHeaderOptions);
