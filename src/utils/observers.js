const headerOptions = {
    rootMargin: '-95% 0px 0px 0px'
};

const workPageOptions = {
    rootMargin: '-50% 0px 0px 0px',
    threshold: 0
};

const projectOptions = {
    threshold: 0
};

const headerObserver = new IntersectionObserver((entries) => {
    const header = document.querySelector('header');
    entries.forEach(entry => {
        console.log(entry);
        if (!entry.isIntersecting) {
            header.classList.add('navbarScrolled');
            header.classList.remove('navbar');
        } else {
            header.classList.add('navbar');
            header.classList.remove('navbarScrolled');
        }
    });
}, headerOptions);

const workPageObserver = new IntersectionObserver((entries) => {
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
}, workPageOptions);

const navObserver = new IntersectionObserver((entries) => {
    const header = document.querySelector('header');
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            header.classList.add('navbarScrolled');
            header.classList.remove('navbar');
        } else {
            header.classList.add('navbar');
            header.classList.remove('navbarScrolled');
        }
    });
}, headerOptions);

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if (!entry.isIntersecting) {
            entry.target.classList.remove("appear");
        } else if (entry.isIntersecting) {
            entry.target.classList.add("appear");
        }
    });
}, projectOptions);

export {
    headerObserver,
    navObserver,
    projectObserver,
    workPageObserver
}
