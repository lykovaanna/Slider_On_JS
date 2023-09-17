const entities = [
    { 
        blockContentDescription: [
            {
            city: 'Rostov-on-Don \n LCD admiral',
            apartment: '81 m2',
            repairTime: '3.5 months',
            repairCost: 'Upon reqest'
        }],
        images: 'img/image1.png'
    },
    {
        blockContentDescription: [
            {
                city: 'Sochi \n Thieves',
                apartment: '105 m2',
                repairTime: '4 months',
                repairCost: 'Upon reqest' 
            }
        ],
        images: 'img/image2.png'     
    },
    {
        blockContentDescription: [
            {
                city: 'Rostov-on-Don \n Patriotic',
                apartment: '93 m2',
                repairTime: '3 months',
                repairCost: 'Upon reqest'
            }
        ],
        images: 'img/image3.png'
    }
];

const blockContentDescription = document.querySelectorAll('.blockContentDescription');
const images = document.querySelectorAll('.img_slider-image');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const cityItem = document.querySelectorAll('.nav_item');

let currentSlide = 0;

function showSlide(index) {
    const slide = entities[index];
    const textDescr = slide.blockContentDescription[0];

    const cityElm = document.getElementById('city');
    const apartment = document.getElementById('apartment');
    const repairTime = document.getElementById('repairTime');
    const repairCost = document.getElementById('repairCost');

    cityElm.textContent = textDescr.city;
    apartment.textContent = textDescr.apartment;
    repairTime.textContent = textDescr.repairTime;
    repairCost.textContent = textDescr.repairCost;

    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
            dots[i].classList.add('active');
        } else {
            image.style.display = 'none';
            dots[i].classList.remove('disabled')
        }
    });

    cityItem.forEach((link, i) => {
        if(i === index) {
            linkink.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    dots.forEach((dot, i) => {
        if(i === index) {
            dot.classList.add('disabled');
        } else {
            dot.classList.remove('disabled');
        }
    });

    if (index === 0) {
        prev.classList.add('active');
    } else {
        prev.classList.remove('active');
    }

    if(index === entities.length - 1) {
        next.classList.add('active');
    } else {
        next.classList.add('active');
    }
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
}

function setSliderDot(dotIndex) {
    currentSlide = dotIndex;
    showSlide(currentSlide);
}

function setSliderLink(linkIndex) {
    currentSlide = linkIndex;
    showSlide(currentSlide);
}

prev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 +images.length) % images.length;
    showSlide(currentSlide);
})

next.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
})

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        setSliderDot(i);
    });
});

cityItem.forEach((link, i) => {
    link.addEventListener('click', () => {
        setSliderLink(i);
    });
});

showSlide(currentSlide);