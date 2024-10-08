function initializeSwiper() {
    if (window.innerWidth < 768) {
        if (!window.swiper) {
            window.swiper = new Swiper('.swiper', {
                slidesPerView: 1.3,
                slidesPerGroup: 1,
                spaceBetween: 16,
                freeMode: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                loop: false,
            });
        }
    } else {
        if (window.swiper) {
            window.swiper.destroy();
            window.swiper = undefined;
        }
    }
}

window.addEventListener('resize', initializeSwiper);
document.addEventListener('DOMContentLoaded', initializeSwiper);

let buttonMenu = document.querySelector('.burger-menu-input');
let burgerMenu = document.querySelector('.burger-menu');
let burgerLabel = document.querySelector('.burger-menu-label');
let blurContainer = document.querySelectorAll('.container--blur-on');
let blurContainer1 = document.querySelector('.container--blur-1');
let blurContainer2 = document.querySelector('.container--blur-2');
let checkBox = document.querySelector('.check-box');


buttonMenu.addEventListener('click', function() {
    if (burgerMenu.classList.contains('burger-menu--on')) {
        burgerMenu.classList.remove('burger-menu--on');
        burgerLabel.classList.remove('burger-menu-label--on');
        // checkBox.classList.add('check-box--on');

        for (let i = 0; i < blurContainer.length; i++) {
            blurContainer[i].classList.remove('container--blur');
        }
    }
    else {
        burgerMenu.classList.add('burger-menu--on');
        burgerLabel.classList.add('burger-menu-label--on');
        // checkBox.classList.remove('check-box--on');
        // checkBox.classList.add('check-box--off');

        for (let i = 0; i < blurContainer.length; i++) {
            blurContainer[i].classList.add('container--blur');
        }
        
    }
});

// for (let i = 0; i < blurContainer.length; i++) {
//     blurContainer[i].addEventListener('click', function() {
//         // if (burgerMenu.classList.contains('burger-menu--on')) {
//             burgerMenu.classList.remove('burger-menu--on');
//             burgerLabel.classList.remove('burger-menu-label--on');
//             blurContainer1.classList.remove('container--blur');
//             blurContainer2.classList.remove('container--blur');
//             checkBox.classList.remove('check-box--on');
//             checkBox.classList.add('check-box--off')
//         // }

//         // else {
//         //     checkBox.classList.add('check-box--on');
//         //     checkBox.classList.remove('check-box--off')
//         // }
//     });
// }


