const homePageHeaderOptions = {
    rootMargin: '-90% 0px 0px 0px'
};

const projectOptions = {
    threshold: 0.2
};

const homePageHeaderObserver = new IntersectionObserver((entries) => {
    const header = document.querySelector('header');
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('navbarScrolled');
            header.classList.remove('navbar');
        } else {
            header.classList.add('navbar');
            header.classList.remove('navbarScrolled');
        }
    });
}, homePageHeaderOptions);

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove("appear");
        } else if (entry.isIntersecting) {
            entry.target.classList.add("appear");
        }
    });
}, projectOptions);

export {
    homePageHeaderObserver,
    projectObserver
}