let oldArray = [
    'page',
    'page__header',
    'navbar',
    'navbar__container container',
    'navbar__logo',
    'main-nav',
    'main-nav__list',
    'main-nav__item',
    'main-nav__link',
    'main-nav__item',
    'main-nav__link',
    'main-nav__item',
    'main-nav__link',
    'main-nav__item',
    'main-nav__link',
    'main-nav__item',
    'main-nav__link',
    'main-nav__item',
    'main-nav__link',
    'nabar__menu-toggler',
    'visually-hidden',
    'page__main',
    'container',
    'uk-article ',
    'tm-article-wrapper',
    'tm-article-content',
    'visually-hidden',
    'intro-sect',
    'uk-grid',
    'uk-width-medium-1-3',
    'uk-width-medium-1-3 uk-width-small-1-2',
    'uk-width-medium-1-3 uk-width-small-1-2',
    'sect-lastdays',
    'uk-grid',
    'uk-width-medium-7-10 ',
    'uk-width-medium-3-10',
    'sect-lastdays-button-area',
    'sect-proph',
    'uk-grid uk-grid-large',
    'uk-width-small-1-2',
    'uk-width-small-1-2',
    'uk-grid-divider uk-hidden-small',
    'uk-grid uk-grid-large',
    'uk-width-small-1-2',
    'uk-width-small-1-2',
    'sect-newbible',
    'uk-grid',
    'uk-width-small-1-3',
    'uk-width-small-2-3',
    'uk-button uk-button-primary uk-button-large',
    'uk-grid-divider',
    'uk-grid',
    'uk-width-small-1-3',
    'uk-width-small-2-3',
    'uk-button uk-button-primary uk-button-large',
    'uk-grid-divider',
    'uk-grid',
    'uk-width-small-1-3',
    'uk-width-small-2-3',
    'uk-button uk-button-primary uk-button-large',
    'uk-grid-divider',
    'uk-grid',
    'uk-width-small-1-3',
    'uk-width-small-2-3',
    'uk-button uk-button-primary uk-button-large',
    'uk-grid-divider',
    'uk-grid',
    'uk-width-small-1-3',
    'uk-width-small-2-3',
    'uk-button uk-button-primary uk-button-large',
    'sect-bq',
    'sect-proverbs',
    'uk-grid uk-grid-collapse',
    'uk-width-small-1-3',
    'sect-proverbs-item',
    'uk-width-small-1-3',
    'uk-width-small-1-3',
    'sect-proverbs-item',
    'uk-grid uk-grid-collapse',
    'uk-width-small-1-3',
    'uk-width-small-1-3',
    'sect-proverbs-item',
    'uk-width-small-1-3',
    'sect-bible',
    'sect-about-bible',
    'uk-grid',
    'uk-width-medium-1-3',
    'uk-width-medium-2-3',
    'uk-grid-divider uk-hidden-small',
    'uk-grid',
    'uk-width-medium-1-3',
    'sect-about-bible-2div',
    'uk-width-medium-2-3',
    'uk-grid',
    'uk-width-medium-1-2',
    'uk-grid-divider uk-visible-small',
    'uk-width-medium-1-2',
    'uk-grid-divider uk-visible-small',
    'uk-grid',
    'uk-width-medium-1-2',
  ]



let arrayToArray = function (inputАrray) {
    let outputArray = [];
    let modifier = '--';
    let element = '_';
    
    for (let i = 0; i < inputАrray.length; i++) {
        inputАrray[i] = inputАrray[i].trim();
        inputАrray[i] = inputАrray[i].replace(/ {1,}/g," ");
    
        let array = inputАrray[i].split(' ');
        for (let j = 0; j < array.length; j++) {
            let isModifier = array[j].indexOf(modifier);
            let isElement = array[j].indexOf(element);
            if (isModifier === -1 && isElement === -1) {
                outputArray.push(array[j]);
            }
        }
    }
   console.log(outputArray);
}

arrayToArray(oldArray);


