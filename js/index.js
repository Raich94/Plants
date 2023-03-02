console.log('При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\nAccordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\nВ разделе contacts реализован select с выбором городов +25');


// -------------------------------------------------- Меню бургер --------------------------------------------------------
const iconMenu = document.querySelector('.header__menu-icon');
const menuBody = document.querySelector('.header__nav');


if (iconMenu) {
    iconMenu.addEventListener("click", function(){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
// закрытие бургера при нажатии на ссылку
const linksMenu = document.querySelectorAll('.header__link');

linksMenu.forEach(element => {
    element.addEventListener("click", function() {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    });
});
// закрытие при нажатии на контент
const content = document.querySelector('.content');

content.addEventListener("click", function() {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
});

//  ---------------------------------------------------------------servise-----------------------------------------------------------

const serviceBtns = Array.from(document.querySelectorAll('.service__btn'));
const serviceItems = Array.from(document.querySelectorAll('.service__ithem'));

// const buttonGardens = document.getElementById('gardens');
// const ithemGardens = document.querySelectorAll('.service__ithem_gardens')
// const buttonLawn = document.getElementById('lawn');
// const ithemLawn = document.querySelectorAll('.service__ithem_lawn')
// const buttonPlanting = document.getElementById('planting');
// const ithemPlanting = document.querySelectorAll('.service__ithem_planting')


serviceBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        btn.classList.toggle('service__btn_active');
    //   заблюрил все при нажатии
        serviceItems.forEach(item => {
            if (serviceBtns.some(btn => btn.classList.contains('service__btn_active'))) {
                item.classList.add('service__ithem_blur')
            }else {
                item.classList.remove('service__ithem_blur')
            }
        })
// отключил третью кнопку
        if (serviceBtns[0].classList.contains('service__btn_active') && serviceBtns[1].classList.contains('service__btn_active')) {
            serviceBtns[2].disabled = true;
            serviceBtns[2].classList.add('service__btn_disabled')
        } else {
            serviceBtns[2].disabled = false;
            serviceBtns[2].classList.remove('service__btn_disabled')
        }
        if (serviceBtns[0].classList.contains('service__btn_active') && serviceBtns[2].classList.contains('service__btn_active')) {
            serviceBtns[1].disabled = true;
            serviceBtns[1].classList.add('service__btn_disabled')
        } else {
            serviceBtns[1].disabled = false;
            serviceBtns[1].classList.remove('service__btn_disabled')
        }
        if (serviceBtns[1].classList.contains('service__btn_active') && serviceBtns[2].classList.contains('service__btn_active')) {
            serviceBtns[0].disabled = true;
            serviceBtns[0].classList.add('service__btn_disabled')
        } else {
            serviceBtns[0].disabled = false;
            serviceBtns[0].classList.remove('service__btn_disabled')
        }
// снял блюр с активных карточек
        if (serviceBtns[0].classList.contains('service__btn_active')){
            serviceItems[0].classList.remove('service__ithem_blur');
            serviceItems[4].classList.remove('service__ithem_blur');
        }
        if (serviceBtns[1].classList.contains('service__btn_active')){
            serviceItems[2].classList.remove('service__ithem_blur');
        }
        if (serviceBtns[2].classList.contains('service__btn_active')){
            serviceItems[1].classList.remove('service__ithem_blur');
            serviceItems[3].classList.remove('service__ithem_blur');
            serviceItems[5].classList.remove('service__ithem_blur');
        }

    })
})


// ---------------------------------------------------prises--------------------------------------------

const pricesButtons = document.querySelectorAll('.prices__ithem');
// const pricesPanel = Array.from(document.querySelectorAll('.prices__wrapper_panel'));
const buttonBasics = document.getElementById('basics');
const buttonStandard = document.getElementById('standard');
const buttonPro = document.getElementById('pro');
const panelBasics = document.getElementById('panel_basics');
const panelStandard = document.getElementById('panel_standard');
const panelPro = document.getElementById('panel_pro');


pricesButtons.forEach( btn => {
    btn.addEventListener('click', function() {
        btn.classList.toggle('prices__ithem_active');
// открываю нужный аккордеон
        let panel = this.nextElementSibling;
        if (btn.classList.contains('prices__ithem_active')) {
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
        }
// при открытии одного закрываю другой
        if (btn === buttonBasics) {
            buttonStandard.classList.remove('prices__ithem_active');
            buttonPro.classList.remove('prices__ithem_active');
            panelStandard.style.display = 'none';
            panelPro.style.display = 'none';
        }
        if (btn === buttonStandard) {
            buttonBasics.classList.remove('prices__ithem_active');
            buttonPro.classList.remove('prices__ithem_active');
            panelBasics.style.display = 'none';
            panelPro.style.display = 'none';
        }
        if (btn === buttonPro) {
            buttonBasics.classList.remove('prices__ithem_active');
            buttonStandard.classList.remove('prices__ithem_active');
            panelBasics.style.display = 'none';
            panelStandard.style.display = 'none';
        }
    });
});





// -------------------------------------------------- contacts ---------------- глянуть косяк с медиа---------------------------------------

const contactsButtons = document.querySelector('.contacts__dropdown-btn');

const canandaiguaBtn = document.getElementById('btn_canandaigua');
const newYorkBtn = document.getElementById('btn_new_york');
const yonkersBtn = document.getElementById('btn_yonkers');
const sherrillBtn = document.getElementById('btn_sherrill');

const canandaiguaCard = document.getElementById('card_canandaigua');
const newYorkCard = document.getElementById('card_new_york');
const yonkersCard = document.getElementById('card_yonkers');
const sherrillCard = document.getElementById('card_sherrill');

const allCards = document.querySelectorAll('.contacts__city_card')


contactsButtons.addEventListener('click', function() {
    contactsButtons.classList.toggle('contacts__dropdown-btn_active');

    allCards.forEach(card => {
        card.classList.remove('contacts__city_card_active');
    })
    contactsButtons.innerHTML = 'City';

// открываю/закрываю список
    let panel = this.nextElementSibling;
        if (contactsButtons.classList.contains('contacts__dropdown-btn_active')) {
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
        }


    const contactsRow = document.querySelector('.contacts__row');
    const dropDown = document.querySelector('.contacts__dropdown');
    const contactsImage = document.querySelector('.contacts__image-body');

    // const mediaQuery1440 = window.matchMedia('(max-width: 1440px)');
    const mediaQuery970 = window.matchMedia('(max-width: 970px)');
    const mediaQuery380 = window.matchMedia('(max-width: 380px)');

    // if (mediaQuery1440.matches) {
    //     if (contactsButtons.classList.contains('contacts__dropdown-btn_active')) {
    //         contactsRow.style.margin = "37px 0 0";
    //         dropDown.style.padding = "0 0 352px";
    //     } else {
    //         contactsRow.style.margin = "37px 0 0";
    //         dropDown.style.padding = "0 0 352px";
    //     }
    // }

// меняю отступы и удаляю картинку при разных медиа
    if (mediaQuery970.matches) {
        if (contactsButtons.classList.contains('contacts__dropdown-btn_active')) {
            contactsRow.style.margin = "60px 0 0";
            dropDown.style.padding = "0 0 290px";
        } else {
            contactsRow.style.margin = "99px 0 0";
            dropDown.style.padding = "0 0 250px";
        }
    }
    if (mediaQuery380.matches) {
        if (contactsButtons.classList.contains('contacts__dropdown-btn_active')) {
            contactsRow.style.margin = "42px 0 0";
            dropDown.style.padding = "0 0 294px";
            contactsImage.style.display = "none";
        } else {
            contactsRow.style.margin = "82px 0 0";
            dropDown.style.padding = "0 0 132px";
            contactsImage.style.display = "block";
        }
    }
})
// при выборе города закрываю список, вывожу нужную карточку и меняю название селекта
canandaiguaBtn.addEventListener('click', function() {
    canandaiguaCard.classList.toggle('contacts__city_card_active');
    contactsButtons.nextElementSibling.style.display = "none";
    contactsButtons.innerHTML = 'Canandaigua, NY';
})
newYorkBtn.addEventListener('click', function() {
    newYorkCard.classList.toggle('contacts__city_card_active');
    contactsButtons.nextElementSibling.style.display = "none";
    contactsButtons.innerHTML = 'New York City';
})
yonkersBtn.addEventListener('click', function() {
    yonkersCard.classList.toggle('contacts__city_card_active');
    contactsButtons.nextElementSibling.style.display = "none";
    contactsButtons.innerHTML = 'Yonkers, NY';
})
sherrillBtn.addEventListener('click', function() {
    sherrillCard.classList.toggle('contacts__city_card_active');
    contactsButtons.nextElementSibling.style.display = "none";
    contactsButtons.innerHTML = 'Sherrill, NY';
})