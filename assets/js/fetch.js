/*
Use .fetch() to load in new html snippets. A function then removes the old HTML and adds
the new ones in the correct position in the DOM. Animate the whole thing in and out.
*/

let aboutLink = document.querySelector("#about");
// let newLink = document.querySelector("#about");
let skillsLink = document.querySelector("#skills");

let linkArray = [aboutLink, skillsLink];

linkArray.forEach((eachLink) => {
	eachLink.addEventListener('click', (e) => {
		switch (eachLink) {
            case aboutLink:
                fetchPage(eachLink, "about.html");
                break;
            case skillsLink:
                fetchPage(eachLink, "skills.html");
                break;
        }
	})
})

function fetchPage(link, page) {
	let baseURL = `${window.location.protocol}//${window.location.hostname}`;

	if (window.location.port) {
		baseURL += `:${window.location.port}`;
	}

	fetch(`${baseURL}/${page}`)
		.then(function(response) {
			return response.text()
		})
		.then(function (html) {
            let doc = new DOMParser().parseFromString(html, "text/html");

            anime({
                targets: '.main-title h2, .main-content',
                translateX: 700,
                opacity: 0,
                easing: 'easeInExpo',
                duration: 700,
                complete: (anim) => {
                    document.querySelector('.wrapper-left').remove();
                }
            })

            setTimeout(function () {
                document.querySelector('section').insertBefore(doc.querySelector('.skills'), document.querySelector('.hero'));

                anime({
                    targets: '.skills__content .main-title h2, .main-content, .navbar',
                    translateX: [-600, 0],
                    delay: (el, i) => 100 * i,
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                })
            }, 700);
        })
}