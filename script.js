document.addEventListener('DOMContentLoaded', function() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 38, 
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff" 
            },
            "shape": {
                "type": "polygon", 
                "stroke": {
                    "width": 0
                },
                "polygon": {
                    "nb_sides": 3 
                },
                "image": {
                    "width": 190,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.664994832269074,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 2.2722661797524872,
                    "opacity_min": 0.08115236356258881,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.6,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2, 
                "direction": "none", 
                "random": false, 
                "straight": false, 
                "out_mode": "out", 
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 961.4383117143238
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false
                },
                "resize": true
            }
        },
        "retina_detect": true
    });

    // menu
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay'); 

    menuButton.addEventListener('click', function(event) {
        menu.classList.toggle('active');
        menuButton.classList.toggle('rotate');
        overlay.style.display = menu.classList.contains('active') ? 'block' : 'none'; // オーバーレイの表示切替
        event.stopPropagation(); 
    });

    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove('active');
            menuButton.classList.remove('rotate');
            overlay.style.display = 'none'; 
        }
    });

    overlay.addEventListener('click', function() {
        menu.classList.remove('active');
        menuButton.classList.remove('rotate');
        overlay.style.display = 'none'; 
    });

    // back button
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function() {
        window.history.back(); 
    });

    // scroll top
    const scrollTopButton = document.getElementById('scroll-top-button');
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            galleryItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // copy
    function copyToClipboard(button) {
        const codeBlock = button.nextElementSibling.textContent;
        const textArea = document.createElement('textarea');
        textArea.value = codeBlock;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    }

    // event 
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            copyToClipboard(button);
        });
    });

    filterButtons[0].click();
});
