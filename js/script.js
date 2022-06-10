
// БУРГЕР---------------------------------------------------

const iconMenu = document.querySelector('.menu__icon');
const burgerMenu = document.querySelector('.burger__menu');
if(iconMenu){
   
    iconMenu.addEventListener("click", function(e){
        iconMenu.classList.toggle('_active');
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('burger__active');
        
    });
   
}



// ПРОКРУТКА--------------------------------------------------

const menuLinks = document.querySelectorAll('.burger__links,.header__links,.header__img,.footer__img,.footer__link[data-goto]');
if(menuLinks.length > 0){
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener("click", onMenuLinkClick);

    });

    function onMenuLinkClick (e){
        const menuLink = e.target;

        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if(iconMenu.classList.contains('_active')){
                iconMenu.classList.remove('_active');
                document.body.classList.remove('_lock');
                burgerMenu.classList.remove('burger__active');
            }


            window.scrollTo({
                top:gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }

}