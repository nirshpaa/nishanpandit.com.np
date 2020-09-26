document.addEventListener('DOMContentLoaded', () => {
    //Intitial page load animation
    anime.timeline({
        easing: 'easeOutExpo',
    })
        .add({
            targets: '.section--1',
            // translateX: [-1000, 0],
            opacity: [0, 1],
        })
        .add({
            targets: '.main-heading h1',
            opacity: [0, 1],
            translateY: [20, 0]
        }, "-=500")
        .add({
            targets: '.main-heading h2',
            opacity: [0, 1],
            translateY: [20, 0]
        }, "-=800")
        .add({
            targets: '.link-nav',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
            delay: (el, i) => 100 * i
        }, "-=800")
        .add({
            targets: '.find-me',
            opacity: [0, 1],
            translateY: [20, 0]
        }, "-=900")
        .add({
            targets: '.hero',
            opacity: [0, 1],
            translateY: [-90, 0],
        }, "-=800")
        .add({
            targets: '.social-icons a',
            height: ['0px', '119px'],
            opacity: [0, 1]
        }, "-=900")
        .add({
            targets: '.buttons a',
            opacity: [0, 1],
            translateY: [90, 0]
        }, "-=1000")
})