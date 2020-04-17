const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // To toggle nav


    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
    // To animate links

    navLinks.forEach((link,index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        
    });
}

navSlide();