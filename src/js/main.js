let slider = document.querySelector('.slider');
let wrapper = document.querySelector('.wrapper');
let next = document.querySelector('.arrow-next');
let prev = document.querySelector('.arrow-prev');
let item = document.querySelectorAll('.item');
let currdeg  = 0;
let active = 0;

next.addEventListener('click', () => {
    slider.classList.toggle('zoom');

    currdeg = currdeg - 120;

    if (active === item.length - 1) {
        active = 0;
    } else {
        active++;
    }

    toggle();
});

prev.addEventListener('click', () => {
    slider.classList.toggle('zoom');

    currdeg = currdeg + 120;

    if (active === 0) {
        active = item.length - 1;
    } else {
        active--;
    }

    toggle();
});

let toggle = () => {
    setTimeout(() => {
        for (let i = 0; i < item.length; i++) {
            item[i].classList.remove('active');
        }

        item[active].classList.add('active')
        wrapper.style.transform = 'rotateY(' + currdeg + 'deg)';
    }, 900);

    setTimeout(() => {
        slider.classList.toggle('zoom');
    }, 1900);
}
